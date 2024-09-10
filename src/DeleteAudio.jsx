import { useDispatch } from "react-redux";
import { deleteAudio } from "./audioSlice";

export default function DeleteAudio(props) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#confirm-delete"><i className="bi bi-trash3-fill"></i> Delete</button>
                </div>
            </div>

            {/* delete confirmation modal */}
            {/* Modal */}

            <div className="modal fade" id="confirm-delete" tabIndex="-1" aria-labelledby="confirmDelete" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            Are you sure you want to delete the selected audio(s)?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary btn-danger" data-bs-dismiss="modal" onClick={function () {
                                let deleteAudios = [];
                                let deleteSel = document.querySelectorAll("input[name='delete']:checked");
                                for (let i = 0; deleteSel.length > i; i++) {
                                    let audioId = deleteSel[i].closest("tr").getAttribute("id")
                                    deleteAudios.push(audioId);
                                };
                                console.log(deleteAudios);
                                props.selectedAudios(deleteAudios);
                            }}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}