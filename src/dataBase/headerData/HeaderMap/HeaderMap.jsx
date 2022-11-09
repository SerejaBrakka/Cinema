import HeaderMapHelper from "./HeaderMapHelper/HeaderMapHelper";

const HeaderMap = ({ data }) => {
  const [profile, menu, category] = data.map((item) => Object.entries(item));

  return [profile, menu, category].map((item) => {
    return <HeaderMapHelper item={item} key={item[0][0]} />;
  });
};

export default HeaderMap;
