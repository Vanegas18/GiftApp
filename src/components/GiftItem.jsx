/* eslint-disable react/prop-types */
export const GiftItem = ({ title, url }) => {
  console.log(title, url);
  return (
    <div className="card">
      <img src={url} alt="" />
      <p>{title}</p>
    </div>
  );
};
