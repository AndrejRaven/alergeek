const Header = ({ title, center }) => {
  return (
    <p className={`${center ? 'text-center': null} my-5 h1 font-weight-bold`}>{title}</p>
  )
}

export default Header;