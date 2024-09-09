import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

export default function AudioData(props) {
  const audios = useSelector((store) => {
    return store.audio.value;
  });
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = React.useState(false);

  return (
    <>
    {
      audios.map(
        (audio, index) => {
          const categories = (audio.category).split(',');
          const catItems = categories.map((cat) =>
            <span class="badge bg-success">{cat}</span>
          );
          return (
            <tr id={index}>
              <td>{audio.title}</td>
              <td>{audio.description}</td>
              <td>
                <div className="badge-cont">
                  {catItems}
                </div>
              </td>
              <td>{audio.uploadDate}</td>
              <td>{audio.fileSize}</td>
              <td>{audio.fileFormat}</td>
              <td className="audio-delete">
                <button onClick={
                  () => {
                    setIsDelete(!isDelete)
                  }
                } className="btn btn-primary btn-lg btn-danger"><i className="bi bi-trash3-fill"></i> Delete</button>
              </td>
            </tr>
          )
        }
      )
    }
    </>
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
        <tr class={className} id={index}>
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