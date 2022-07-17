import {Line, Pie} from 'react-chartjs-2';
import 'chart.js/auto';


const data = {
	labels: [
		'Purchase Price',
		'DownPayment',
		'Mortgage Amount',
        'CMHC Insurance'
	],
	datasets: [{
		data: [920000, 180000, 740000, 21000],
		backgroundColor: [
		'#5059AB',
		'#01CC9B',
		'#14A0C0',
        '#7DE314'
		],
		hoverBackgroundColor: [
		'#5059AB',
		'#01CC9B',
		'#14A0C0',
        '#7DE314'
		]
	}]
};

export default function MortgageVisuals() {



    return (
        <>
            <div className="bg-[#1d72e8]/[0.1] font-poppins flex-wrap px-10 py-8 rounded-[25px] flex justify-between items-center  w-[100%] mb-12">
                <div className={'w-[45%]'}>
                    <Pie
                        data={data}
                        width={400}
                        height={400}
                    />
                </div>
                <div className="flex flex-col w-[55%] text-[0.8rem]">
                    <div className="flex justify-between pt-3 pb-2 border-b-2">
                        <div>
                            Purchase Price:
                        </div>
                        <div>
                            <b>$920,000</b>
                        </div>
                    </div>
                    <div className="flex justify-between pt-3 pb-2 border-b-2">
                        <div>
                            Down Payment:
                        </div>
                        <div>
                            <b>$180,000</b>
                        </div>
                    </div>
                    <div className="flex justify-between pt-3 pb-2 border-b-2">
                        <div>
                            Mortgage Amount:
                        </div>
                        <div>
                            <b>$740,000</b>
                        </div>
                    </div>
                    <div className="flex justify-between pt-3 pb-2 border-b-2">
                        <div>
                            CMHC Insurance:
                        </div>
                        <div>
                            <b>$21,000 or $31.81/mos</b>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )

};