import React, {useState, useRef} from 'react';
import ImageViewer from "react-simple-image-viewer";

const document = () => {
    const ref = useRef(null);
    const [zoomImageSRC, setZoomImageSRC] = useState('');
    const [activeTabId, setActiveTabId] = useState("documentUpload");
    const [expandedCardIds, setExpandedCardIds] = useState([]);
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [uploadedDocuments, setUploadedDocuments] = useState([]);

    const handleExpandCardButtonClicked = (id) => {
        let expandedCards = [...expandedCardIds];
        let index = expandedCards.indexOf(id);
        if (index >= 0) {
            expandedCards.splice(index, 1);
        } else {
            expandedCards.push(id);
        }
        setExpandedCardIds(expandedCards);
    };

    const handleTabChange = (tabId) => {
        setActiveTabId(tabId);
    };

    const handleFileInputClicked = (event) => {
        event.target.value = '';
    };

    const handleImageZoomIn = (src) => {
        setZoomImageSRC(src);
    };

    const handleImageZoomOut = () => {
        setZoomImageSRC('');
    };

    const handleUploadButtonClicked = (index) => {
        if (activeStepIndex === index) {
            ref.current && ref.current.click();
        }
    };

    const handleDocumentUpload = (event) => {
        let uploadedFiles = [...uploadedDocuments];
        uploadedFiles.push(event.currentTarget.files[0]);
        setUploadedDocuments(uploadedFiles);
        setActiveStepIndex(activeStepIndex + 1);
    };

    const getSideNavElements = () => {
        let views = [];

        sideNavData.forEach(function (data) {
            let isActiveTab = (activeTabId === data.id);

            views.push(
                <div className={`h-[76px] w-[280px] pl-9 flex cursor-pointer items-center ${isActiveTab ? "bg-[#398ECE] rounded-2xl text-[#FFFFFF]" : "text-[#435179]"}`}
                     key={data.id} onClick={handleTabChange.bind(this, data.id)}>
                    <img className={`h-[26px] mr-4 w-[26px] ${isActiveTab ? "brightness-0 invert" : ""}`} src={data.image} alt={""}/>
                    <div className="text-[14px] font-medium leading-5">{data.label}</div>
                </div>
            );
        });

        return views;
    };

    const getDocumentGuideViews = () => {
        let views = [];

        documentUploadGuideData.forEach(function (data, index) {
            views.push(
                <div key={"guide" + index} className="h-[336px] rounded-2xl w-[500px] pl-9 inline-block mr-[40px] pt-[25px] bg-[#EFF6FB]">
                    <div className="flex justify-center gap-[40px] pb-[20px]">
                        {getImageWithTickView(data.image, data.outlineTick, data.searchIcon)}
                    </div>
                    <div className="flex justify-center">
                        <div className="inline-block">
                            {getGuideDescriptionViews(data.msg, data.tick)}
                        </div>
                    </div>
                    {zoomImageSRC && <ImageViewer
                        src={[zoomImageSRC]}
                        currentIndex={0}
                        onClose={handleImageZoomOut}
                        disableScroll={false}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.4)"
                        }}
                        closeOnClickOutside={true}
                    />}
                </div>
            );
        });

        return views;
    };

    const getImageWithTickView = (image, outlineTick, searchIcon) => {
        let views = [];

        image.forEach(function (src, index) {
            views.push(
                <div key={"image" + index} className="inline-block">
                    <img className="h-[154px] w-[124px] cursor-pointer" src={src} onClick={handleImageZoomIn.bind(this, src)} alt={""}/>
                    <div className="flex items-center justify-center">
                        <img className="mr-2 h-[22px] w-[22px]" src={outlineTick} alt={""}/>
                        <img className="h-[21px] w-[21px] cursor-pointer" onClick={handleImageZoomIn.bind(this, src)} src={searchIcon} alt={""}/>
                    </div>
                </div>
            );
        });

        return views;
    }

    const getGuideDescriptionViews = (msgs, src) => {
        let views = [];

        msgs.forEach(function (msg, index) {
            views.push(
                <div key={"msg" + index} className="flex pb-1 items-center">
                    <img className="mr-2 w-[11px] h-[10px]" src={src} alt={""}/>
                    <div className="text-[#42507A] text-[14px] font-semibold">{msg}</div>
                </div>
            );
        });

        return views;
    }

    const getDocumentUploadSteps = () => {
      let views = [];

      documentUploadData.forEach(function (data, index) {
          let expanded = (expandedCardIds.indexOf(index) >= 0);

          views.push(
              <div className="flex" key={"step" + index}>
                  <div className={`flex`}>
                      <div className={`w-[830px] mb-[20px] inline-block rounded-2xl py-[16px] bg-[#EFF6FB]  ${expanded ? "h-[540px]" : "h-[150px]"}`}>
                          <div className="flex items-center px-[30px]">
                              <div className="grow cursor-pointer text-[#42507A] text-[18px] font-semibold"
                                   onClick={handleExpandCardButtonClicked.bind(this, index)}>
                                  {data.label}</div>
                              <div className="flex items-center">
                                  <div className="mr-[20px] w-[434px] flex justify-center items-center h-[117px] rounded-2xl bg-[#FFFFFF]">
                                      <div className="w-[390px] text-[#42507A] text-[15px] font-semibold">
                                          {data.msg}
                                          <a className="underline-offset-1 underline cursor-pointer decoration-[#435179]"
                                             onClick={handleExpandCardButtonClicked.bind(this, index)}>
                                              Click here.</a>
                                      </div>
                                  </div>
                                  <img className="h-[76px] w-[76px] cursor-pointer" onClick={handleUploadButtonClicked.bind(this, index)} src={"/imgs/Document-Upload.png"} alt={""}/>
                                  <input type='file'
                                         ref={ref}
                                         id="upload"
                                         multiple={false}
                                         className="hidden"
                                         onClick={handleFileInputClicked}
                                         onChange={handleDocumentUpload}/>
                              </div>
                          </div>
                          {expanded && data.expandImage &&
                          <div className="mx-4 h-[369px] w-[795px] mt-4 items-center bg-[#FFFFFF] flex justify-center rounded-2xl">
                              <img className="h-[328px] w-[727px]" src={data.expandImage} alt={""}/>
                          </div>}
                      </div>
                  </div>
              </div>
          );
      });

      return views;
    };

    const getStepper = () => {
        let views = [];
        let length = documentUploadData.length - 1;

        documentUploadData.forEach(function (data, index) {
            let expanded = (expandedCardIds.indexOf(index) >= 0);
            let src = (index <= activeStepIndex) ? "/imgs/Green-Tick-Step-Icon.png" : "/imgs/Grey-Tick-Step-Icon.png";

            views.push(
                <div className="inline-block" key={"stepper" + index}>
                    <img className="h-[40px] w-[40px] mb-1.5" src={src} alt={""}/>
                    {index !== length &&
                    <div key={index}
                         className={`w-[2px] pl-[18px] border-r-2 border-solid border-[#D8D8D8] ${expanded ? "h-[505px]" : "h-[117px]"}`}>
                    </div>}
                </div>
            );
        });

        return views;
    };

    return (
        <div className="w-full min-h-screen flex flex-row">
            <div className="w-[320px] bg-[#EFF6FB] min-h-screen px-5 py-8">
                <div className="pl-5 pt-2.5 rounded-lg items-center pr-2.5 h-fit flex justify-end bg-[#FFFFFF] drop-shadow-[0_0_30px_rgba(83,59,226,0.102)]">
                    <div className="w-[93px] text-[#435179] mr-8 h-fit text-[22px] font-bold leading-8">
                        Justin & Sabrina
                    </div>
                    <img className="h-[85px] w-[115px]" src={"/imgs/Users-Icon.png"} alt={""}/>
                </div>
                <div className="my-12">
                    {getSideNavElements()}
                </div>
                <div className="flex items-center">
                    <img className="h-[70px] mr-2.5 w-[70px]" src={"/imgs/Bulb-Icon.png"} alt={""}/>
                    <div className="inline-block">
                        <div className="text-[#435179] pb-1 text-[15px] font-bold leading-5">Quick Mortgage Insights</div>
                        <div className="text-[#435179] text-[14px] font-medium leading-5">Learn in 60 secs or less</div>
                    </div>
                </div>
            </div>
            <div className="p-10">
                <div className="text-[#435179] text-[26px] font-semibold pb-3 leading-8">Upload your Documents</div>
                <div className="text-[#435179] text-[15px] font-semibold pb-1 leading-5">
                    For your different lenders, you only have to upload documents once and can send them accordingly.
                </div>
                <div className="text-[#435179] text-[15px] font-semibold pb-6 leading-5">
                    Not sure where to find documents? What they look like? How to upload? Follow our guide, we made it easy for you.
                </div>
                <div className="text-[#435179] text-[26px] font-semibold pb-7 leading-8">Document Upload Guide</div>
                <div className="flex mb-5 justify-center">
                    {getDocumentGuideViews()}
                </div>
                <div className="text-[#435179] text-[26px] font-semibold pb-5 leading-8">Upload Your Documents</div>
                <div className="text-[#435179] text-[15px] font-semibold pb-7 leading-5">
                    Justin and Sabrina, our team will check the documents you upload to ensure accuracy.
                </div>
                <div className="flex">
                    <div className="w-[70px] pt-[56px] inline-block h-full">
                        {getStepper()}
                    </div>
                    <div className="inline-block">
                        {getDocumentUploadSteps()}
                    </div>
                </div>
            </div>
        </div>
    );
}

const sideNavData = [
    {
        id: "lenderComparison",
        label: "Lender Comparison",
        image: "/imgs/Clock-Icon.png",
    },
    {
        id: "documentUpload",
        label: "Document Upload",
        image: "/imgs/Document-Icon.png",
    },
    {
        id: "inboxFromLenders",
        label: "Inbox From Lenders",
        image: "/imgs/Inbox-Icon.png",
    },
    {
        id: "closingCostCalculator",
        label: "Closing Cost Calculator",
        image: "/imgs/Wallet-Icon.png",
    },
];

const documentUploadGuideData = [
    {
        image: ["/imgs/Clear-Document1.png", "/imgs/Clear-Document2.png"],
        msg: ["Must be clear and readable", "Must show all contents", "Valid + True document"],
        searchIcon: "/imgs/Green-Search-Icon.png",
        outlineTick: "/imgs/Green-Outline-Tick.png",
        tick: "/imgs/Green-Tick.png"
    },
    {
        image: ["/imgs/Blur-Document1.png", "/imgs/Blur-Document2.png"],
        msg: ["Too blurry", "The full document is not in frame", "Can not read it properly"],
        searchIcon: "/imgs/Green-Search-Icon.png",
        outlineTick: "/imgs/Red-Outline-Cross.png",
        tick: "/imgs/Red-Cross.png"
    },
];

const documentUploadData = [
    {
        label: "Most Recent Paystub",
        msg: "Below are sample paystubs, with fields required by Lenders. Where do I find this document? ",
        expandImage: "/imgs/Most-Recent_paystub-Image.png",
    },
    {
        label: "T4 - 2019 + 2020",
        msg: "Below are sample T4’s, with fields required by Lenders. Where do I find this document? ",
        expandImage: "/imgs/Most-Recent_paystub-Image.png",
    },
    {
        label: "Letter of Employment",
        msg: "Below are sample Letters of Employment, with fields required by Lenders. Where do I find this document? ",
        expandImage: "/imgs/Most-Recent_paystub-Image.png",
    },
    {
        label: "Down Payment Source",
        msg: "Below are sample Down Payment Source’s, with fields required by Lenders. Where do I find this document? ",
        expandImage: "/imgs/Most-Recent_paystub-Image.png",
    },
    {
        label: "NOA - 2019 + 2020",
        msg: "Below are sample Notice of Assessment's, with fields required by Lenders. Where do I find this document? ",
        expandImage: "/imgs/Most-Recent_paystub-Image.png",
    },
    {
        label: "T1 General - 2019 + 2020",
        msg: "Below are sample T1 General's, with fields required by Lenders. Where do I find this document? ",
        expandImage: "/imgs/Most-Recent_paystub-Image.png",
    },
];

export default document;