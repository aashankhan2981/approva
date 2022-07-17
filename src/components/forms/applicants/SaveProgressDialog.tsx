import React from "react";
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Link from 'next/link'
export const SaveProgressDialog = ({ onClose }) => {
    return (
        <Dialog onClose={onClose} open={true} className='rounded-3xl '>
            <div className='h-[450px] px-[60px] w-[580px] flex flex-col justify-center items-center'>
                <img className='pb-[20px] pt-[30px] ' src={"/imgs/Confetti-Emoji.png"} height={100} width={100} alt={""}/>
                <div className='text-[19px]	font-bold text-center'>
                    Great News! There are over 31 Lenders interested in your application
                </div>
                <div className='flex h-[190px] pb-[10px] gap-2 flex-col justify-end items-center'>
                    <button className='ml-auto w-[190px] px-6 bg-green-400 rounded-md py-3 text-white font-semibold hover:bg-green-500' onClick={onClose}>
                        Take me to them
                    </button>
                    <button className='ml-auto w-[190px] px-6 bg-gray-200 rounded-md py-3 text-black font-semibold hover:bg-gray-300' onClick={()=>window.location.reload()}>
                        Go back
                    </button>
                    <Link href='/'>
                        <a>
                            <button className='ml-auto w-[190px] px-10 bg-gray-200 rounded-md py-3 text-black font-semibold hover:bg-gray-300'
                            //onClick={() => window.location.reload()} this is not good . use next Link for navigation
                            >
                                No, Cancel
                            </button>
                        </a>

                    </Link>

                </div>
            </div>
        </Dialog>
    )
}

SaveProgressDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
};