import loginImg from '../../assets/images/loginimg.png'
import Logo from '../../assets/images/logo.png'
import Input from '../../components/input'
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import { useAuth } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login("vijay", "123456")
        navigate('/dashboard');
    }
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center px-5">
                    <img src={Logo} alt='image' className=' md:hidden block w-1/2 self-center mb-4' />

            <div className='w-full h-full, md:w-[70%] h-[70%]'>
                <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">

                    <div className=' bg-secondaryPurple p-2'>
                        <img src={loginImg} alt='image' className='w-full' />
                    </div>
                    <div className=' py-3 px-4 flex flex-col gap-4 justify-center' >
                    <img src={Logo} alt='image' className='hidden md:block w-1/3 self-center' />

                        <h2 className='text-3xl text-center text-headingTxt font-semibold my-3'>Login</h2>
                        <form>
                            <Input
                                label="Email"
                                // placeholderText="Enter School Nmae"
                                onChangeText={() => { }}
                                value=""
                            />
                            <Input
                                label="Password"
                                // placeholderText="Enter School Nmae"
                                onChangeText={() => { }}
                                value=""
                            />
                            <div className="flex items-center justify-center my-2">
                                {/* <Button type={BUTTON_TYPES.PURPLE} btnText="Submit" onClick={() => login("vijay", "123456")} /> */}
                                <button onClick={handleLogin}>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
