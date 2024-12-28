"use client"

export default function SigninComponent() {
function Handler(){
    console.log("supp!!!!")
}
    return (
        <div className="h-screen flex justify-center items-center">
            <form className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="text-3xl font-extrabold text-center mb-6">Sign in</div>
                <LabelledInput label="Username" placeholder="harkirat@gmail.com" />
                <LabelledInput label="Password" type="password" placeholder="123456" />
                <button
                    onClick={Handler}
                    type="submit"
                    className="mt-6 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    const inputId = label.toLowerCase().replace(/ /g, '-'); // Create a unique id for inputs

    return (
        <div className="mb-4">
            <label
                htmlFor={inputId}
                className="block mb-2 text-sm font-semibold text-black"
            >
                {label}
            </label>
            <input
                type={type || "text"}
                id={inputId}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
