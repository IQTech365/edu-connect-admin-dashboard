import loginImg from '../../assets/images/loginimg.png'
import Logo from '../../assets/images/logo.png'
import Input from '../../components/input'
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import { useAuth } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DropDwon, { TOption } from '../../components/drop-down';
import { Api } from '../../http/Api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { signIn } from '../../redux/slices/signIn.slice';
import { ISignInPayload } from '../../types';
const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login("vijay", "123456");
        navigate('/dashboard');
    }
    // const dispatch = useAppDispatch();
    // const { requesting, success, failure } = useAppSelector((state:RootState) => state.SignIn)

    // const handleLogin = () => {
    //     login("vijay", "123456")
    //     // navigate('/dashboard');/
    //     const payload:ISignInPayload = {
    //         email: "",
    //         password: "",
    //     }
    //     dispatch(signIn(payload));
    // }

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>('');


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const opetionsData: TOption[] = [
        { value: "Admin", label: "Admin", },
        { value: "Principal", label: "Principal" },
        { value: "Vendor", label: "Vendor" },
    ]
    const handleRoleChange = (newValue: TOption | null) => {
        if (newValue) {
            setRole(newValue.value);
        } else {
            setRole('');
        }
    }

    // const handleLogin = async () => {
    //     try {

    //         const response = await 

    //     } catch (error) {

    //     }
    // }



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
                        <form className=' space-y-2'>
                            <DropDwon
                                label="Choose Role"
                                options={opetionsData}
                                onChange={handleRoleChange}

                            />
                            <Input
                                label="Email"
                                placeholderText="Enter your email"
                                onChangeText={handleEmail}
                                value={email}
                            />
                            <Input
                                label="Password"
                                placeholderText="Enter your password"
                                onChangeText={handlePassword}
                                value={password}
                            />
                            <div className="flex items-center justify-center my-2">
                                <Button type={BUTTON_TYPES.PURPLE} btnText="Submit" onClick={handleLogin} />
                                {/* <button onClick={handleLogin}>Submit</button> */}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
