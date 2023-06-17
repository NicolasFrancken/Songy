import "./Skeleton.css";

function Skeleton({ times }) {
  const boxes = [1, 2, 3, 4, 5, 6, 7];
  const content = boxes.map((n) => {
    return (
      <div className="Skeleton-list-container" key={Math.random()}>
        <div className="Skeleton-list-image"></div>
        <div>
          <div className="Skeleton-list-song"></div>
          <div className="Skeleton-list-artist"></div>
        </div>
      </div>
    );
  });

  return (
    <div className="Skeleton-container">
      <div className="Skeleton-list">{content}</div>
    </div>
  );
}

export default Skeleton;
