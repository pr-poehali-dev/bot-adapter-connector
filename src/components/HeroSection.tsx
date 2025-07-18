import { Card } from "@/components/ui/card";
import TelegramButton from "./TelegramButton";
import ChannelButton from "./ChannelButton";
import BotCard from "./BotCard";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Casino Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="casino-symbol casino-symbol-1">🎰</div>
        <div className="casino-symbol casino-symbol-2">💎</div>
        <div className="casino-symbol casino-symbol-3">🍒</div>
        <div className="casino-symbol casino-symbol-4">🔔</div>
        <div className="casino-symbol casino-symbol-5">⭐</div>
        <div className="casino-symbol casino-symbol-6">💰</div>
        <div className="casino-symbol casino-symbol-7">🍀</div>
        <div className="casino-symbol casino-symbol-8">7️⃣</div>
        <div className="casino-symbol casino-symbol-9">🎰</div>
        <div className="casino-symbol casino-symbol-10">💎</div>
        <div className="casino-symbol casino-symbol-11">🍒</div>
        <div className="casino-symbol casino-symbol-12">🔔</div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
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

        {/* CTA Buttons */}
        <div className="animate-fade-in space-y-4">
          <TelegramButton />
          <ChannelButton />
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
