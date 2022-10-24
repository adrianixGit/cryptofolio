import Logo from "../../Logo.svg";
import { Modal } from "./modal";
export const CreateNew = () => {
  return (
    <div>
      <img src={Logo} alt="logo" className="w-[30%]" />
      <div className="flex flex-col mt-5">
        <div>
          <div className="mb-4">
            <h1 className="text-2xl font-bold"> Create other Portfolio</h1>
            <p className="text-sm">
              Easily separate the coins and positions you track
            </p>
          </div>
          <label
            htmlFor="my-modal"
            className="btn modal-button w-[70%] bg-gradient-to-r from-primary to-secondary  "
          >
            Create New Porfolio
          </label>
          <Modal />
        </div>
        <div class="overflow-x-auto mt-10">
          <table className="table w-full table-zebra">
            <thead>
              <tr className="border-b-[4px] border-primary border-double">
                <th></th>
                <th>Trading Pairs</th>
                <th>Last Traded Price</th>
                <th>24h change %</th>
                <th>24h Hight</th>
                <th>24h Low</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-success">1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>

              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-error">-1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>

              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-success">1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>
              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-success">1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>

              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-error">-1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>

              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-success">1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>
              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-success">1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>

              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-error">-1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>

              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-success">1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>
              <tr className="border-b-[0.5px] border-primary">
                <th>1</th>
                <td>Bitcoin</td>
                <td>12400</td>
                <td className="text-success">1.14%</td>
                <td>19800</td>
                <td>18200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
