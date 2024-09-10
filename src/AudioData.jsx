import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAudio } from "./audioSlice";

import song from "./../src/files/test.mp3";

export default function AudioData(props) {
    const audios = useSelector((store) => {
        return store.audio.value;
    });
    const dispatch = useDispatch();

    function AudioItem({id, title, file, description, categories, uploadDate, fileSize, deleted}) {
        return (
            <>
                <tr id={id}>
                    <td>
                        {title}
                        <br />
                        <br />

                        <audio controls className="w-100">
                            <source src={song} type="audio/mpeg" />
                            Audio not supported
                        </audio>
                    </td>
                    <td>{description}</td>
                    <td>
                        <div className="badge-cont">{categories}</div>
                    </td>
                    <td>{uploadDate}</td>
                    <td>{fileSize}</td>
                    <td className="movie-delete">
                        <input type="checkbox" name="delete"
                            onChange={() => {
                                if (deleted) {
                                    deleted = false;
                                } else {
                                    deleted = true;
                                }
                                // console.log(deleted);
                                dispatch(
                                    deleteAudio({
                                        index: id,
                                        audioDelete: deleted,
                                    })
                                );
                            }}
                        />
                    </td>
                </tr>
            </>
        );
    }

    return audios.map((audio, index) => {
        const categories = audio.category.split(",");
        const catItems = categories.map((cat) => (
            <span className="badge bg-success">{cat}</span>
        ));

        return (
            <AudioItem
                id={index}
                title={audio.title}
                file={audio.file}
                description={audio.description}
                categories={catItems}
                uploadDate={audio.uploadDate}
                fileSize={audio.fileSize}
                deleted={audio.deleted}
            />
        );
    });
}
