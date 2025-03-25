import logo from "../../../public/assets/media/LogoDamavand.png";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import imgfooter from "../../../public/assets/media/nsr.png";
import imgfooter1 from "../../../public/assets/media/fnvrd.png";
import { BsEnvelope } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const Footer = () => {
    return ( <>
    <div className="bg-[#ffb73c] w-[100%] lg:flex hidden flex-col  justify-center items-center  p-5 mt-4">
        <div className="w-[20%]" >
            <img className="w-[80%]" src={logo} alt="" />
        </div>
        <div className="flex flex-row h-[25vh] p-5 justify-between w-[100%]  mt-4">
            <div className="flex flex-col w-[23%] justify-center items-center ">
                <div className="w-[25%] bg-[white] rounded-full flex justify-center items-center p-3  border-[2px] border-[#FAA518]">
                    <CiLocationOn className="text-[#FAA518] font-bold" size={45}/>
                    
                </div>
                <div className="w-[80%] text-center h-[10vh] text-[black] font-bold mt-3 text-[14px]">
                    <p>تهران، دروازه دولت، خیابان انقلاب، ساختمان شقایق، واحد 23، طبقه سوم</p>
                </div>
              

            </div>
            <div className="flex flex-col w-[23%] justify-center items-center ">
                <div className="w-[25%] bg-[white] rounded-full flex justify-center items-center p-3  border-[2px] border-[#FAA518]">
                    <BsFillTelephoneFill className="text-[#FAA518]" size={45}/>
                    
                </div>
                <div className="w-[80%] text-center h-[10vh] text-[black] font-bold  mt-3 text-[14px]">
                    <p>تهران، دروازه دولت، خیابان انقلاب، ساختمان شقایق، واحد 23، طبقه سوم</p>
                </div>
              

            </div>
            <div className="flex flex-col w-[23%] justify-center items-center ">
                <div className="w-[25%] bg-[white] rounded-full flex justify-center items-center p-3  border-[2px] border-[#FAA518]">
                    <BsClock className="text-[#FAA518]" size={45}/>
                    
                </div>
                <div className="w-[60%] text-center h-[10vh] text-[black] font-bold    mt-3 text-[14px] ">
                    <p>شنبه تا چهارشنبه 9 تا 17 پنجشنبه 9 تا 13</p>
                </div>
              

            </div>
            <div className="flex flex-col w-[23%] justify-center items-center ">
                <div className="w-[25%] bg-[white] rounded-full flex justify-center items-center p-3  border-[2px] border-[#FAA518]">
                    <BsEnvelope className="text-[#FAA518]" size={45}/>
                    
                </div>
                <div className="w-[80%] text-center h-[10vh]  text-[black] font-bold mt-3 text-[14px]">
                    <p>تهران، دروازه دولت، خیابان انقلاب، ساختمان شقایق، واحد 23، طبقه سوم</p>
                </div>
              

            </div>
        </div>
        <div className=" w-[20%] flex flex-row justify-around mx-auto mt-10 ">
            <AiFillTwitterCircle className="text-[white] text-[20px] " size={40}/>
            <AiFillGithub className="text-[white] text-[20px] " size={40}  />
            <AiFillLinkedin className="text-[white] text-[20px] " size={40}  />
            <AiFillFacebook className="text-[white] text-[20px] " size={40}  />
        </div>
       <div className="w-[90%] bg-[white] h-[1px] mt-8"></div>
       <div className="w-[35%] flex flex-row justify-between mt-4">
           <div className="w-[25%] bg-amber-50 rounded-lg flex flex-row justify-center items-center">
            <img className="w-[80%]" src={imgfooter} alt="" />
           </div>
           <div className="w-[25%] bg-amber-50 rounded-lg flex flex-row justify-center items-center">
            <img className="w-[80%]" src={imgfooter1} alt="" />
           </div>
           <div className="w-[25%] bg-amber-50 rounded-lg flex flex-row justify-center items-center">
            <img className="w-[80%]" src={imgfooter} alt="" />
           </div>
       </div>
      
        <div className="w-[90%] mt-8 text-center">
            <p className="text-[12px]">© 2025 تمامی حقوق متعلق به رایا تجارت الکترونیک نیتا می‌باشد. | هرگونه کپی برداری پیگرد قانونی دارد. RayaNita®</p>
        </div>
    </div>
    
    </> );
}
 
export default Footer;