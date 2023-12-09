const Logo = () => {
  return (
    <header className="mb-8">
        <div >
            <div className="h-80 flex justify-center">
                <img  className="absolute -top-80 z-0 w-[850px] opacity-30" src="./image/gradient.png" alt="gradient" />
                <img  className="absolute -top-60 z-20 w-[550px]" src="./image/portal.jpg" alt="portal" />
                
                <img className="absolute w-[390px] mt-10 mx-auto z-40" src="./image/logo.png" alt="Logo" />
            </div>
            
        </div>
    </header>
  )
}
export default Logo