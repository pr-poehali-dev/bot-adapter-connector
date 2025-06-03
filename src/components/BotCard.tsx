import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const BotCard = () => {
  return (
    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-md mx-auto hover-scale">
      <CardHeader className="text-center p-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
          <span className="text-3xl">🤖</span>
        </div>

        <CardTitle className="text-2xl font-bold text-gray-800 mb-3 font-rubik">
          @mines211q_bot
        </CardTitle>

        <CardDescription className="text-gray-600 text-base leading-relaxed">
          Официальный бот игры Mines в Telegram. Найди безопасные клетки,
          избегай мин и получай награды!
        </CardDescription>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            🎮 Игры
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            💰 Призы
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            ⚡ Быстро
          </span>
        </div>
      </CardHeader>
    </Card>
  );
};

export default BotCard;
