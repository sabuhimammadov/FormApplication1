import { useRef } from "react"
import styles from "./FormAdd.module.css"
import { useDispatch } from "react-redux"
import { addData } from "../../share/store/slices/formSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const AddInfo = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fullName = useRef()
    const imageUrl = useRef()
    const email = useRef()
    const Biography = useRef()
    const FormData = () => {
        const name = fullName.current.value;
        const emailAdress = email.current.value;
        const biography = Biography.current.value;
        const picture = imageUrl.current.value;
        if (!name || !emailAdress || !biography || !picture) {
            toast.error("Please add info")
            return
        }
        console.log("name", name)
        const datalist = {
            name, emailAdress, picture, biography, id: new Date().getTime(),isEditing:false
        }
        toast.success("Information added successfully")

        dispatch(addData(datalist))
        fullName.current.value = ""
        fullName.current.value = ""
        fullName.current.value = ""
        fullName.current.value = ""
        console.log("ss", emailAdress)
        navigate("./home")
    }
    return (

        <div className={`text-white w-50 d-flex flex-column justify-content-center align-item-center ms-5 mt-5 ${styles["addInfo"]}`} >
            <div className="mb-3">

                <label htmlFor="FullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="FullName" aria-describedby="text" placeholder="Add Your Full Name" ref={fullName} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Add Your Email" ref={email} />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Your Image</label>
                <input type="text" className="form-control" id="image" aria-describedby="img" placeholder="Add Your Image Url" ref={imageUrl} />
            </div>
            <div className="mb-3">
                <label htmlFor="Biography" className="form-label">Biography</label>
                <input type="text" className="form-control" id="Biography" aria-describedby="Biography" placeholder="Add Your Biography" ref={Biography} />
            </div>
            <button type="button" className="btn btn-danger" onClick={FormData}>Danger</button>
        </div>
    )
}
export default AddInfo