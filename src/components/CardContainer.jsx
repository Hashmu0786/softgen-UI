import { CardStrategy } from "./CardStrategy";

export default function CardContainer() {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="m-10 grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-4 2xl:w-[1320px]">
            <div>
            <CardStrategy/>
            </div>
            <div className="mt-10">
            <CardStrategy/>
            </div>
            <div>
            <CardStrategy/>
            </div>
            <div className="mt-10">
            <CardStrategy/>
            </div>
       

        </div>
      </div>
    );
  }
  