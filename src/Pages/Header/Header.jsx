import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../../Styles/Header.css';
import { IoIosHome, IoMdCall } from "react-icons/io";
import UseAuth from "../../Hook/useAuth";
import { MdAttachEmail, MdEventAvailable, MdOutlineAdd } from "react-icons/md";
import { HiArchiveBox } from "react-icons/hi2";
import { FcInvite } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";
import useCarts from "../../Hook/useCarts";

const Header = () => {
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();
  const { data } = useCarts();

  const totalPrice = data?.reduce((acc, currentItem) => {
    const price = parseInt(currentItem.price);
    return isNaN(price) ? acc : acc + price;
  }, 0);

  return (
    <div className="shadow-2xl w-full font-Poppins">

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {data?.map((singleData) => (
            <div className="grid grid-cols-2 text-lg font-semibold mb-3 gap-10" key={singleData.id}>
              <h1>{singleData.food_name}</h1>
              <h1>{singleData.price}</h1>
            </div>
          ))}
          <hr className=' mt-1 h-[1px] border-none bg-slate-200 mx-auto w-[100%] ' />
          <div className="grid grid-cols-2 text-lg font-semibold mb-3 gap-10 text-red-800 bg-slate-100 p-2 shadow-2xl">
            <h1>Total: </h1>
            <h1>{totalPrice}</h1>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Upper navbar */}
      <div className="h-[4rem] bg-[#2F7955]">
        <div className="flex items-center justify-around">
          <div>
            <div className="space-y-3 flex items-center justify-center gap-10 mt-2">
              <div className="mt-2 uppercase text-gray-50 dark:text-gray-900">Social media</div>
              <div className="flex  text-gray-50justify-start space-x-3">
                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                  {/* Facebook icon */}
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                  {/* Twitter icon */}
                </a>
                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                  {/* Instagram icon */}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden items-center justify-around mt-3">
            <div className="flex gap-1 items-center text-[#FFFFFF]">
              <IoMdCall size={25} />
              <h1>Call: +8201065974450</h1>
              <div className="border-r-2 h-full ml-3  border-white"></div>
            </div>
            <div className="flex gap-1 items-center text-[#FFFFFF]">
              <MdAttachEmail size={25} />
              <h1>Email: {user?.email}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="">
        <Navbar fluid rounded>
          <Navbar.Brand href="#">
            {/* Logo */}
          </Navbar.Brand>
          <div className="flex md:order-2">
            {user ? (
              <Dropdown arrowIcon={false} inline label={<Avatar img={user.photoURL} rounded className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />}>
                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user.email}</span>
                </Dropdown.Header>
                <Dropdown.Item className="">
                  <Link to={`/MyFoods/${user.email}`} className=" " href="#" activeClassName="active">
                    <div className="flex items-center gap-1 justify-center">
                      <span>Added Foods</span>
                    </div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={`/MyFoodsRequest/${user.email}`} className="" href="#" activeClassName="active">
                    <div className="flex items-center gap-1 justify-center">
                      <span>Requested Food </span>
                    </div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => {
                  logOut();
                  navigate("/");
                }}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/login">
                <button className="align-middle mr-3 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#2F7955] border border-[#3aaf01] text-[#fff] hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]" type="button">
                  Sign In
                </button>
              </Link>
            )}

            <Navbar.Toggle />
          </div>

          {/* Navbar Items */}
          <Navbar.Collapse>
            <NavLink to="/" className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center  justify-center">
                <IoIosHome />
                <span>Home</span>
              </div>
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to="/AvailableFoods" className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center gap-1 justify-center">
                <MdEventAvailable />
                <span>Available Foods</span>
              </div>
            </NavLink>

            {/* Conditional Navbar Items */}
            <div className="border-r-2"></div>
            {user &&
              <>
                <NavLink to="/AddFood" className="font-normal text-base" href="#" activeClassName="active">
                  <div className="flex items-center gap-1 justify-center">
                    <MdOutlineAdd />
                    <span>Add Food</span>
                  </div>
                </NavLink>
                <div className="border-r-2"></div>
                <NavLink to={`/MyFoods/${user.email}`} className="font-normal text-base" href="#" activeClassName="active">
                  <div className="flex items-center gap-1 justify-center">
                    <HiArchiveBox />
                    <span>My Foods</span>
                  </div>
                </NavLink>
                <div className="border-r-2"></div>
                <NavLink to={`/MyFoodsRequest/${user.email}`} className="font-normal text-base" href="#" activeClassName="active">
                  <div className="flex items-center gap-1 justify-center">
                    <FcInvite />
                    <span>My Food Request </span>
                  </div>
                </NavLink>
                <div className="border-r-2"></div>
              </>
            }
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex ">
              <FaCartShopping size={20}></FaCartShopping>
              <div className="badge text-red-800 -mt-3 font-bold ">{data?.length}</div>
            </button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
