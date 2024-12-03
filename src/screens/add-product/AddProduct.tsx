import { useState, useRef } from "react"
import Input from "../../components/input"
import DropDwon, { TOption } from "../../components/drop-down"
import { IoAddCircleSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Button from "../../components/button";
import { BUTTON_TYPES } from "../../components/button/data/button";
import { MdOutlineImageNotSupported } from "react-icons/md";

const size = ['S', 'M', 'L', 'XL']
const gender = ['Male', 'Female', 'Unisex']
const opetionsData: TOption[] = [
    {
        value: "father",
        label: "Father",
    },
    { value: "mother", label: "Mother" },
    { value: "grandFather", label: "Grand Father" },
    { value: "grandMother", label: "Grand Mother" },
]

const AddProduct = () => {
    const inputRef = useRef(null)
    const [sizeColor, setSizeColor] = useState<string[]>([])
    const [genderColor, setGenderColor] = useState<string>('')

    // Track the previewed images
    const [imagePreview, setImagePreview] = useState<string[]>([]);
    const [image, setImage] = useState('')

    const MAX_IMAGES = 5; // Set the maximum number of images allowed

    const fileChange = (e: any) => {
        const files = Array.from(e.target.files);
        // If already 5 images are uploaded, prevent further uploads
        if (imagePreview.length >= MAX_IMAGES) {
            alert("You can only upload a maximum of 5 images.");
            return;
        }

        // Limit the number of images that can be added
        const remainingSlots = MAX_IMAGES - imagePreview.length;
        const filesToUpload = files.slice(0, remainingSlots);  // Limit to the remaining slots

        filesToUpload.map((file: any) => {
            const fileReader = new FileReader();

            fileReader.onload = (e: any) => {
                converter(e.target.result);
            };
            fileReader.readAsDataURL(file);
        });

        function converter(file: any) {
            setImagePreview(prevFile => [...prevFile, file]);
        }
    };

    const imageClickHandler = () => {
        if (inputRef.current) {
            //@ts-ignore
            inputRef.current.click();
        }
    }

    const handleSetColor = (size: string) => {
        if (sizeColor.includes(size)) {
            setSizeColor(sizeColor.filter(item => item !== size))
        } else {
            setSizeColor([...sizeColor, size])
        }
    }

    const handleDeleteImage = (index: number) => {
        setImagePreview(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handleImagePreview = (index: number) => {
        setImage(imagePreview[index]);
    };

    console.log(image);

    return (
        <div className="p-3 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-secondaryPurple py-3 px-4 rounded-md md:col-span-2">
                    {/* Product Information */}
                    <span className="font-medium text-headingTxt">Product Information</span>
                    <div className="w-[65%]">
                        <Input
                            label="Name"
                            placeholderText="Enter Product Name"
                            onChangeText={() => { }}
                            value=""
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <span className="text-[#b2b2b2]">Product Description</span>
                        <textarea
                            rows={5}
                            className="p-2 rounded-[5px] border-solid border-[1px]
                             border-[#c5c5c5] focus:outline-none focus:ring-1
                              focus:ring-blue-200" />
                    </div>
                    {/* Pricing and Stock */}
                    <>
                        <div className="my-2">
                            <span className=" font-medium text-headingTxt">Pricing and Stock</span>
                        </div>
                        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-3 py-3 px-4 rounded-md">
                            <div className="flex flex-col bg-white rounded-md p-2">
                                {/* Size selection */}
                                <span className="font-medium mb-2 text-headingTxt">Size</span>
                                <div className="flex gap-1">
                                    {size.map((size, index) => {
                                        const isSelected = sizeColor.includes(size)
                                        return (
                                            <div
                                                key={index}
                                                className={`flex items-center justify-center p-2 h-10 w-10 
                                                rounded-md cursor-pointer 
                                                ${isSelected ? 'bg-headingTxt' :
                                                        'bg-secondaryPurple'}`}
                                                onClick={() => handleSetColor(size)}
                                            >
                                                <span className={`font-medium ${isSelected ?
                                                    'text-white' : 'text-headingTxt'}`}>{size}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* Gender selection */}
                            <div className="flex flex-col bg-white rounded-md p-2">
                                <span className="font-medium mb-2 mt-1 text-headingTxt">Gender</span>
                                <div className="flex gap-4 ">
                                    {gender.map((gender, index) => {
                                        const isGenderSelected = genderColor === gender;
                                        const bgColor = isGenderSelected ? 'bg-headingTxt ring-headingTxt' : 'ring-secondaryPurple'
                                        return (
                                            <div key={index} className="flex items-center justify-center gap-2">
                                                <div className={`h-3 w-3 rounded-full ring-2 ring-offset-2
                                                 ${bgColor} cursor-pointer`} onClick={() => setGenderColor(gender)}></div>
                                                <span className="text-headingTxt">{gender}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-md">
                                {/* <span className="font-medium text-headingTxt">Color</span> */}
                                <DropDwon
                                    label="Choose Color"
                                    options={opetionsData}
                                />
                            </div>
                            <div></div>

                            <div className="">
                                <Input
                                    label="Price"
                                    onChangeText={() => { }}
                                    value=""
                                />
                            </div>
                            <div className="">
                                <Input
                                    label="Stock Quantity"
                                    onChangeText={() => { }}
                                    value=""
                                />
                            </div>

                        </div>
                    </>
                    <>
                        <div className="my-2">
                            <span className=" font-medium text-headingTxt">Discount</span>
                        </div>
                        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-3 py-3 px-4 rounded-md">
                            <div className="">
                                <Input
                                    label="Discount"
                                    onChangeText={() => { }}
                                    value=""
                                />
                            </div>
                            <div className="">
                                <Input
                                    label="Discount Type"
                                    onChangeText={() => { }}
                                    value=""
                                />
                            </div>
                        </div>
                    </>
                    {/* Class & Category Dropdowns */}
                    <>
                        <div className="my-2">
                            <span className=" font-medium text-headingTxt">Select Class & Category</span>
                        </div>
                        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-3 py-3 px-4 rounded-md">
                            <div className="">
                                <DropDwon
                                    label="Choose Class"
                                    options={opetionsData}
                                />
                            </div>
                            <div className="">
                                <DropDwon
                                    label="Choose Category"
                                    options={opetionsData}
                                />
                            </div>
                            <div className="">
                                <DropDwon
                                    label="Choose Sub-Category"
                                    options={opetionsData}
                                />
                            </div>
                        </div>
                    </>
                </div>

                {/* Image Upload Section */}
                <div className="bg-secondaryPurple py-3 px-4 rounded-md flex flex-col items-center">
                    <div className="h-[340px] w-full bg-[#cdb1dd] rounded-lg mb-3 flex justify-center items-center p-3">
                        {
                            image ? <img src={image} alt="Preview" className="h-[316px] w-full object-cover rounded-sm" /> : <MdOutlineImageNotSupported size={90} className="text-headingTxt opacity-75" />
                        }
                    </div>
                    <div className="w-full p-3 border-y-2 border-y-headingTxt flex justify-start flex-wrap gap-3">
                        {imagePreview.map((img, index) => {
                            return (
                                <div className="h-[75px] w-[75px] rounded-md relative" key={index} onClick={() => handleImagePreview(index)}>
                                    <img src={img} className="w-full h-full object-cover rounded-md" />
                                    <div className="absolute -top-1 -right-1 bg-headingTxt rounded-full p-[1px] cursor-pointer" onClick={() => handleDeleteImage(index)}>
                                        <IoClose size={15} className="text-secondaryPurple" />
                                    </div>
                                </div>
                            )
                        })}
                        <div className="flex items-center justify-center cursor-pointer h-[75px] w-[75px] border-2 border-headingTxt rounded-sm border-dashed" onClick={imageClickHandler}>
                            <input type="file" style={{ display: 'none' }} ref={inputRef} multiple accept="image/png,image/jpg,image/jpeg" onChange={fileChange} />
                            <IoAddCircleSharp size={22} color="#4D365B" />
                        </div>
                    </div>
                    <div className="flex justify-start w-full">
                        <Button type={BUTTON_TYPES.PURPLE} btnText="Add Product" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
