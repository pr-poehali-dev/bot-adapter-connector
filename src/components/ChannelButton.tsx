import { Button } from "@/components/ui/button";

const ChannelButton = () => {
  const handleChannelRedirect = () => {
    const channelUrl = "https://t.me/+yPfW7MI0h_U3YzRi";

    // Проверяем, поддерживает ли устройство Telegram URI
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    if (isMobile) {
      // На мобильных устройствах пытаемся открыть в приложении Telegram
      window.location.href = channelUrl;
    } else {
      // На десктопе открываем в новой вкладке
      window.open(channelUrl, "_blank");
    }
  };

  return (
    <Button
      onClick={handleChannelRedirect}
      size="lg"
      variant="outline"
      className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-200 font-rubik"
    >
      <span className="mr-3 text-2xl">📢</span>
      Наш канал
      <span className="ml-3 text-xl">💬</span>
    </Button>
  );
};

export default ChannelButton;
