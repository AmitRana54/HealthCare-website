import React from "react";

function DetialsAbout(heading = "lorem isrem xyz", about = []) {
  return (
    <div className="h-[60vh] w-full   flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-pretty text-ellipsis">
        {heading}{" "}
      </h1>
      <p className="text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iusto
        magnam? Voluptas voluptates ullam porro dolorem non enim odio ipsa
        repellendus iusto ratione dolore, incidunt accusantium mollitia repellat
        maxime sit!
      </p>
      <p className="text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        praesentium sapiente debitis quas sequi ut dolores totam voluptate.
        Commodi veniam exercitationem sit minus, ut deserunt esse. Sed omnis
        inventore corrupti.
      </p>
      <p className="text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam
        excepturi, eaque quam maiores esse officiis eum corporis expedita
        voluptas incidunt velit obcaecati fugit laudantium suscipit nesciunt
        veritatis consequatur mollitia!
      </p>
    </div>
  );
}

export default DetialsAbout;
