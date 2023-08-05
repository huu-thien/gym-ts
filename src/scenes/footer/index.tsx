import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium impedit necessitatibus a, explicabo eum aliquid aperiam
            expedita commodi reprehenderit? Temporibus eligendi sapiente, nisi
            optio recusandae numquam iste soluta aut asperiores.
          </p>
          <p>Copy Right 2023</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorrep vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Massa orci senectus</p>
          <p >0337 489 251</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
