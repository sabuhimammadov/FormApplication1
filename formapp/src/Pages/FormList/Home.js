import { MdModeEditOutline } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { colors } from "../../styles/colors/color";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { removeData, editData, handleSave } from "../../share/store/slices/formSlice";
import { useRef } from "react";



const Home = () => {
  const fullName = useRef()
  const imageUrl = useRef()
  const email = useRef()
  const Biography = useRef()

  const data = useSelector((state) => state.formData.data);
  const dispatch = useDispatch();
  console.log("a", data);

  const removeItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeData(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  const editItem = (id) => {
    console.log("id", id)
    dispatch(editData(id));
  }
  const handleSaveClick = (id) => {
    const name = fullName.current.value
    const emailAdress = email.current.value
    const biography = Biography.current.value
    const picture = imageUrl.current.value

    const newText = {
      name, emailAdress, biography, picture
    }
    dispatch(handleSave({ id, newText }))

  };
  return (
    <div className="m-10 " style={{ maxHeight: '600px' }}>
      <Link to={"../"} className="btn btn-warning">Go Back</Link>
      <h2 className="text-white text-5xl text-center mb-5">Personal Infos</h2>
      <table className="table-fixed w-full text-center bg-dark text-white " style={{ color: colors.textBlack1 }}>
        <thead className="text-1xl max-[420px]:text-sm">
          <tr>
            <th className="sticky top-0 ">ID</th>
            <th className="sticky top-0 ">Image</th>
            <th className="sticky top-0 ">FullName</th>
            <th className="sticky top-0 ">Email</th>
            <th className="sticky top-0 ">Biography</th>
            <th className="sticky top-0 "></th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data?.map((item) => (
            <>

              <tr key={item.id}>
                <td>{item.id}</td>
                <td className="flex justify-center items-center">
                  <img
                    className="w-[45px] h-[45px] object-cover rounded-full my-3"
                    src={item.picture}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.emailAdress}</td>
                <td>{item.biography}</td>
                <td>
                  <div className="flex">
                    <div className="w-[64px] h-[36px] hover:bg-slate-100 flex items-center justify-center rounded-md" onClick={() => editItem(item.id)}>
                      <MdModeEditOutline
                        size={24}
                        className="text-green-600 cursor-pointer"
                      />
                    </div>
                    <div className="w-[64px] h-[36px] hover:bg-slate-100 flex items-center justify-center rounded-md" onClick={() => removeItem(item.id)}>
                      <SlTrash
                        size={24}
                        className="text-red-600 cursor-pointer  p-1"
                      />
                    </div>
                  </div>

                </td>
              </tr>
              <Modal show={item.isEditing} onHide={()=>handleSaveClick(item.id)}>
                <Modal.Header closeButton closeVariant='white'>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="mb-3">

                    <label htmlFor="FullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="FullName" aria-describedby="text" placeholder=" Edit Your Full Name" ref={fullName} defaultValue={item.name} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Edit Your Email" ref={email} defaultValue={item.emailAdress} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Your Image</label>
                    <input type="text" className="form-control" id="image" aria-describedby="img" placeholder="Edit Your Image Url" ref={imageUrl} defaultValue={item.picture}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Biography" className="form-label">Biography</label>
                    <input type="text" className="form-control" id="Biography" aria-describedby="Biography" placeholder="Edit Your Biography" ref={Biography} defaultValue={item.biography} />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={()=>handleSaveClick(item.id)}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => handleSaveClick(item.id)}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Home;
