const AppLogo = () => {
    return (
      <div className="flex items-center my-12">
        <div className="relative w-7 h-7">
          <img
            src="/images/Vector1.png"
            alt="Logo Part 1"
            style={{ width: '19.02px', height: '23.22px', top: '1.41px', left: '1.14px' }}
            className="absolute object-contain"
          />
          <img
            src="/images/Vector2.png"
            alt="Logo Part 2"
            style={{ width: '21.99px', height: '27.59px', left: '0.02px' }}
            className="absolute object-contain"
          />
          <img
            src="/images/Vector3.png"
            alt="Logo Part 3"
            style={{ width: '5.57px', height: '5.49px', top: '10.67px', left: '8.24px' }}
            className="absolute object-contain"
          />
          <img
            src="/images/Vector4.png"
            alt="Logo Part 4"
            style={{ width: '2.78px', height: '6.84px', top: '27.6px', left: '13.51px' }}
            className="absolute object-contain"
          />
          <img
            src="/images/Vector5.png"
            alt="Logo Part 5"
            style={{ width: '2.78px', height: '6.84px', top: '27.59px', left: '5.73px' }}
            className="absolute object-contain"
          />
          <img
            src="/images/Vector6.png"
            alt="Logo Part 6"
            style={{ width: '2.78px', height: '8.41px', top: '27.6px', left: '9.53px' }}
            className="absolute object-contain"
          />
        </div>
        <h1 className="text-3xl font-extrabold ml-4">
          <span className="text-[#4EA8DE]">Todo</span>
          <span className="text-[#5E60CE]"> App</span>
        </h1>
      </div>
    );
  };
  
  export default AppLogo;
  