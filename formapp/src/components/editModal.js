import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { handleClose} from '../share/store/slices/formSlice';

const EditModal = ({id}) => {
    const selShow = useSelector((state) => state.formData.show);
    const dispatch = useDispatch();

    return (
        <Modal show={selShow} onHide={() =>dispatch(handleClose(id))}>
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">

                    <label htmlFor="FullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="FullName" aria-describedby="text" placeholder=" Edit Your Full Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Edit Your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Your Image</label>
                    <input type="text" className="form-control" id="image" aria-describedby="img" placeholder="Edit Your Image Url" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Biography" className="form-label">Biography</label>
                    <input type="text" className="form-control" id="Biography" aria-describedby="Biography" placeholder="Edit Your Biography" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(handleClose(id))}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => dispatch(handleClose(id))}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;