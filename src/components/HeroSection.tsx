import { Card } from "@/components/ui/card";
import TelegramButton from "./TelegramButton";
import BotCard from "./BotCard";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Content */}
        <div className="mb-12 animate-fade-in">
          <div className="mb-6">
            <span className="text-6xl mb-4 block">💎</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-rubik">
              Mines Bot
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Играй, зарабатывай, побеждай! Присоединяйся к игре прямо в
              Telegram
            </p>
          </div>
        </div>

        {/* Bot Card */}
        <div className="mb-12 animate-scale-in">
          <BotCard />
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in">
          <TelegramButton />
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-white">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Быстрый старт</h3>
            <p className="text-purple-200 text-sm">Начни играть за секунды</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-white">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Простые правила</h3>
            <p className="text-purple-200 text-sm">Легко понять и освоить</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-white">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-semibold text-lg mb-2">Реальные призы</h3>
            <p className="text-purple-200 text-sm">
              Выигрывай настоящие награды
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
