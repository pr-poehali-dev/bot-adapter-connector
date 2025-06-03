import { Button } from "@/components/ui/button";

const TelegramButton = () => {
  const handleTelegramRedirect = () => {
    const botUrl = "https://t.me/mines211q_bot";

    // Проверяем, поддерживает ли устройство Telegram URI
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    if (isMobile) {
      // На мобильных устройствах пытаемся открыть в приложении Telegram
      const telegramApp = "tg://resolve?domain=mines211q_bot";

      // Сначала пробуем открыть в приложении
      window.location.href = telegramApp;

      // Если приложение не открылось, через 2 секунды откроем веб-версию
      setTimeout(() => {
        window.open(botUrl, "_blank");
      }, 2000);
    } else {
      // На десктопе открываем в новой вкладке
      window.open(botUrl, "_blank");
    }
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleTelegramRedirect}
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-200 font-rubik"
      >
        <span className="mr-3 text-2xl">📱</span>
        Запустить бота
        <span className="ml-3 text-xl">🚀</span>
      </Button>

      <p className="text-purple-200 text-sm">
        Нажми кнопку, чтобы перейти к боту в Telegram
      </p>
    </div>
  );
};

export default TelegramButton;
