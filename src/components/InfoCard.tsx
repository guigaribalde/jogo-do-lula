import useWindowDimensions from "@hooks/useWindowDimensions";

export default function InfoCard({
  info,
  description,
}: {
  info: string;
  description: string;
}) {
  const { width } = useWindowDimensions();
  return (
    <div className="w-full  relative h-36 flex flex-col justify-end">
      {width > 770 && (
        <img className="absolute bottom-0" src="character.png" alt="Character" />
      )}
      <div className="w-full md:pl-16 bg-stone-200 h-24 rounded-md flex flex-col justify-center items-center">
        <text className="md:text-xl text-lg">{info}</text>
        <small className={`text-[#FF2d74]`}>{description}</small>
      </div>
    </div>
  );
}
