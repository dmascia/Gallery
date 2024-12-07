import {useState} from "react";
import { useFormStatus } from "react-dom";

const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const { pending } = useFormStatus();

    const onChangeEmailAddress = (e) => {
        const value = e.target.value;
        const email = String(value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        if (!email) {
            setError("Invalid Email Address");
        } else {
            setEmail(value);
            setError("");
        }
    }

    const onChangePassword = (e) => {
        const value = e.target.value;
        const pwd = String(value);

        if (!pwd.length || pwd.length < 8) {
            setError("Invalid Password");
        } else {
            setPassword(pwd);
            setError("");
        }
    }

    const doSubmit = () => {
        console.log(email, password)
    }

    return (
        <form className="mx-auto mb-4 max-w-sm pb-4"  action={doSubmit}>
            <p>{error}</p>
            <div className="relative">
                <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                <input type="email" className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]" maxLength="256" name="name" placeholder="Email Address" required defaultValue={email} onChange={onChangeEmailAddress} />
            </div>
            <div className="relative mb-4">
                <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
                <input type="password" className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="Password (min 8 characters)" required defaultValue={password} onChange={onChangePassword} />
            </div>
            <label className="mb-6 flex items-center pb-12 font-medium lg:mb-1">
                <input type="checkbox" name="checkbox" />
                <span className="ml-4 inline-block cursor-pointer text-sm" forhtml="checkbox">
                    I agree with the <a href="#" className="font-bold text-[#0b0b1f]">Terms &amp; Conditions</a>
                </span>
            </label>
            <a href="#" className="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
            <button type="submit" disabled={pending} className="mr-6 font-bold">Join The Gallery!</button>
            <svg className="h-4 w-4 flex-none" fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
            </svg>
            </a>
        </form>
    );
}

export default SignUp;
