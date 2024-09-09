import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteAudio } from "./audioSlice";
// import { Link } from 'react-router-dom';

export default function AudioData(props) {
  const audios = useSelector((store) => {
    return store.audio.value;
  });
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = React.useState(false);

  function AudioItem({ id, title, description, categories, uploadDate, fileSize }) {
    return (
      <>
        <tr key={id}>
          <td>{title}</td>
          <td>{description}</td>
          <td>
            <div className="badge-cont">
              {categories}
            </div>
          </td>
          <td>{uploadDate}</td>
          <td>{fileSize}</td>
          <td className="audio-delete">
            <button className="btn btn-primary btn-lg btn-danger"><i className="bi bi-trash3-fill"></i> Delete</button>
          </td>
        </tr>
      </>
    );
  }


  return (
      audios.map(
        (audio) => {
          const categories = (audio.category).split(',');
          const catItems = categories.map((cat) =>
            <span className="badge bg-success">{cat}</span>
          );
          return (
            <AudioItem id={audio.id} title={audio.title} description={audio.description} categories={catItems} uploadDate={audio.uploadDate} fileSize={audio.fileSize} />
          )
        }
      )
  );

/*
  return props.audioList.map(function(audioItem, index) {
    const categories = (audioItem.category).split(",");
    const catItems = categories.map((category) =>
      <span className="badge bg-success">{category}</span>
    );

    let className = "";

    return (
      (!audioItem.deleted && audioItem.show) && (
        <tr className={className} id={index}>
          <td>{audioItem.title}</td>
          <td>{audioItem.desc}</td>
          <td>
            <div className="badge-cont">
              {catItems}
            </div>
          </td>
          <td>{audioItem.dateUpload}</td>
          <td>{audioItem.fileSize}</td>
          <td>{audioItem.fileFormat}</td>
          <td className="audio-delete"><button className="btn btn-primary btn-lg btn-danger"><i className="bi bi-trash3-fill"></i> Delete</button></td>
        </tr>
      )
    )
  })
*/
}