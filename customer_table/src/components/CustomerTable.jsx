import dateFormat, { masks } from "dateformat";

const numberFormatter = Intl.NumberFormat("en-US");

import IconPlus from "images/icon.new@2x.png";
import IconUp from "images/icon.extend@2x.png";
import IconWX from "images/icon.productType01@2x.png";
import IconFC from "images/icon.productType02@2x.png";
import IconUser from "images/icon.user@2x.png";

export default function CustomerTable(props) {
  const rows = props.data.map((d, i) => {
    const handleMod = () => {
      alert(`You clicked the 3dot button. Row: ${i + 1}`);
    };
    return <Row key={`Customer_${i}`} data={d} onMod={handleMod} />;
  });

  return (
    <div className="w-full min-w-[1024px] max-w-[1600px] font-yahei text-base text-black not-italic font-normal text-normal grid gap-2">
      {rows}
    </div>
  );
}

const Row = (props) => {
  const data = props.data;
  const type = data.type;
  const buyer = data.buyer;
  const config = data.config;
  const duration = data.duration;
  const price = data.price;

  const typeColComp = (
    <TypeCol name={type.name} state={type.state} sub={type.sub} />
  );

  const infoColComp = <InfoCol id={data.id} name={data.name} />;

  const domainColComp = <DomainCol name={data.domain} />;

  const buyColComp = <BuyerCol name={buyer.name} time={buyer.time} />;

  const configColComp = (
    <ConfigCol
      point={config.point}
      name={config.name}
      quantity={config.quantity}
    />
  );

  const durationColComp = (
    <DurationCol name={duration.type} quantity={duration.quantity} />
  );

  const priceColComp = <PriceCol detail={price.detail} />;

  const totalColComp = <TotalCol total={price.total} />;

  const configButton = <ConfigButton onClick={props.onMod} />;

  return (
    <div className="grid grid-cols-customer bg-white hover:bg-[#EDF9FC] items-center">
      {typeColComp}
      {infoColComp}
      {domainColComp}
      {buyColComp}
      {configColComp}
      {durationColComp}
      {priceColComp}
      {totalColComp}
      {configButton}
    </div>
  );
};

const TypeCol = (props) => {
  const icon = props.name == "万相" ? IconWX : IconFC;

  const stateColor = props.state == "新购" ? "text-blue" : "text-green";
  const stateIcon = props.state == "新购" ? IconPlus : IconUp;
  const backgroundColor =
    props.state == "新购" ? "bg-[#E9ECFC]" : "bg-[#DEF7EA]";

  return (
    <div
      className={`w-[150px] h-[50px] ${backgroundColor} rounded-[0px_3px_3px_0px] flex items-center`}
    >
      <div className="flex">
        <div className="m-2 w-[30px] h-[30px]">
          <img src={icon} />
        </div>
        <div className="py-1 grid items-center">
          <div className="h-4 flex items-center">
            <div>{props.name}</div>
            <div className={`pl-1 ${stateColor}`}>{props.state}</div>
            <div className="m-1 w-3 h-3">
              <img src={stateIcon} />
            </div>
          </div>
          <div className="text-gray text-sm">{props.sub}</div>
        </div>
      </div>
    </div>
  );
};

const InfoCol = (props) => {
  return (
    <div className="grid gap-1">
      <div className="text-[#ABB6BA] text-sm">{props.id}</div>
      <div className="text-[#020E1D] text-lg">{props.name}</div>
    </div>
  );
};

const DomainCol = (props) => {
  return (
    <div className="w-full flex place-content-center">
      <div className="w-[70px] border-[1px] border-white bg-[#EDF9FC] flex">
        <div className="w-[2px] bg-[#0DAADE]"></div>
        <div className="w-full py-[4px] flex place-content-center">
          {props.name}
        </div>
      </div>
    </div>
  );
};

const BuyerCol = (props) => {
  const time = dateFormat(props.time, "yyyy-mm-dd HH:MM");

  const icon = <img src={IconUser} />;

  return (
    <div>
      <div className="flex">
        {props.name}
        <div className="ml-1 w-[16px] h-[16px]">{icon}</div>
      </div>
      <div className="text-gray">{time}</div>
    </div>
  );
};

const ConfigCol = (props) => {
  const point = numberFormatter.format(props.point);

  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="text-right text-gray">点数</div>
      <div>{point}</div>
      <div className="text-right text-gray">{props.name}</div>
      <div>{props.quantity}</div>
    </div>
  );
};

const DurationCol = (props) => {
  return (
    <div className="flex place-content-center">
      <div className="px-[10px] py-[3px] flex place-items-center bg-[#F9FAFB] rounded-[3px]">
        <div className="text-[#020E1D]">{props.name}</div>
        <div className="h-4 mx-3 w-[1px] bg-[#046281] opacity-[0.1]"></div>
        <div className="text-[#020E1D]">{props.quantity}</div>
        <div className="p-1">年</div>
      </div>
    </div>
  );
};

const PriceCol = (props) => {
  const priceComps = props.detail.map((d, i) => (
    <PriceDetailRow key={`d_${i}`} name={d[0]} price={d[1]} />
  ));

  return <div className="grid gap-1">{priceComps}</div>;
};

const PriceDetailRow = (props) => {
  const price = numberFormatter.format(props.price);

  return (
    <div className="flex items-center">
      <div className="text-gray">{props.name}</div>
      <div>￥</div>
      <div className="text-lg font-number text-right">{price}</div>
    </div>
  );
};

const TotalCol = (props) => {
  const total = numberFormatter.format(props.total);
  return (
    <div className="w-[100px] flex items-center text-[#0DAADE]">
      <div className="text-[16px] leading-[21px]">￥</div>
      <div className="text-[20px] leading-[23px] font-number text-right">
        {total}
      </div>
    </div>
  );
};

const ConfigButton = (props) => {
  const handleClick = () => props.onClick();

  return (
    <div className="m-2 p-2">
      <div
        className="w-8 h-8 transition cursor-pointer text-[#ABB6BA] hover:text-white hover:bg-[#0DAADE] rounded grid place-content-center"
        onClick={handleClick}
      >
        <div className="grid place-content-center text-2xl font-bold">⋯</div>
      </div>
    </div>
  );
};
