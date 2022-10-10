import ProgressBar from "./ProgressBar";

export default function PrizePool({
  prizePool,
  maxPrizePool,
}: {
  prizePool: number;
  maxPrizePool: number;
}) {
  return (
    <div className="md:w-[500px] sm:w-[300px] w-[200px] h-36 flex flex-col justify-center items-center">
      <ProgressBar progress={(prizePool / maxPrizePool) * 100} />
      <text className="text-white">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(prizePool)}
      </text>
    </div>
  );
}
