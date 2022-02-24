let isMouseDown = false;
let convertedImage = null;
function mouseDown(boolean) {
  isMouseDown = boolean;
}
function handleDrag(e, percent = null) {
  if (!isMouseDown) return;
  let rect;
  if (!percent) rect = e.target.parentElement.getBoundingClientRect();
  if (!percent) percent = (e.pageX - rect.left) / rect.width;
  if (!convertedImage)
    convertedImage = e.target.parentElement.querySelector("#image-converted");
  convertedImage.style.width = percent * 100 + "%";
}

export default function BgImage({ id, url, className }) {
  return (
    <>
      <div
        id={id}
        className={className}
        style={{
          background: `url(${url}) no-repeat right`,
          backgroundSize: "100% 0",
        }}
      ></div>
      <div
        onMouseMove={handleDrag}
        onMouseDown={() => {
          mouseDown(true);
        }}
        onMouseUp={() => {
          mouseDown(false);
        }}
        className="spliter"
      ></div>
    </>
  );
}
