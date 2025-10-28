import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Film" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-gradient">Кастинг №1</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#contests" className="text-sm hover:text-primary transition-colors">Конкурсы</a>
            <a href="#education" className="text-sm hover:text-primary transition-colors">Обучение</a>
            <a href="#voting" className="text-sm hover:text-primary transition-colors">Голосование</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#agencies" className="text-sm hover:text-primary transition-colors">Агентствам</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Войти
            <Icon name="User" size={18} className="ml-2" />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm animate-fade-in">
            Международная платформа для актёров
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Твой путь к большому экрану
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Профессиональное обучение, участие в конкурсах и реальные роли в кино. 
            Присоединяйся к сообществу актёров со всего мира.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Начать карьеру
              <Icon name="Star" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
              Узнать больше
              <Icon name="Play" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contests" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Текущие конкурсы</h2>
            <p className="text-lg text-muted-foreground">Выбери свой путь к славе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Драматический актёр", roles: 5, participants: 234, deadline: "30 дней", icon: "Drama" },
              { title: "Комедийный талант", roles: 3, participants: 189, deadline: "45 дней", icon: "Laugh" },
              { title: "Мюзикл 2025", roles: 8, participants: 312, deadline: "60 дней", icon: "Music" }
            ].map((contest, idx) => (
              <Card key={idx} className="hover-scale bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={contest.icon as any} className="text-primary" size={32} />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      Активен
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{contest.title}</CardTitle>
                  <CardDescription className="text-base">
                    {contest.roles} главных ролей + эпизоды
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Users" size={16} className="text-muted-foreground" />
                      <span>{contest.participants} участников</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>Осталось {contest.deadline}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Программа обучения</h2>
            <p className="text-lg text-muted-foreground">Профессиональная подготовка с нуля</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <CardHeader>
                <div className="p-4 bg-primary/20 rounded-lg w-fit mb-4">
                  <Icon name="Theater" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-3xl">Актёрское мастерство</CardTitle>
                <CardDescription className="text-base">50 часов интенсива</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Работа с эмоциями",
                    "Сценическое движение",
                    "Импровизация",
                    "Анализ ролей",
                    "Работа с партнёром"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30">
              <CardHeader>
                <div className="p-4 bg-secondary/20 rounded-lg w-fit mb-4">
                  <Icon name="Mic" size={40} className="text-secondary" />
                </div>
                <CardTitle className="text-3xl">Сценическая речь</CardTitle>
                <CardDescription className="text-base">40 часов практики</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Дикция и артикуляция",
                    "Работа с голосом",
                    "Интонация и ритм",
                    "Диалекты и акценты",
                    "Монологи и диалоги"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="voting" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Система голосования</h2>
            <p className="text-lg text-muted-foreground">Справедливый отбор лучших талантов</p>
          </div>
          <div className="grid gap-6">
            {[
              { 
                step: "1", 
                title: "Выполнение заданий", 
                desc: "5 творческих заданий для демонстрации мастерства",
                icon: "ListChecks"
              },
              { 
                step: "2", 
                title: "Голосование участников", 
                desc: "Каждый участник получает 3 голоса: 1 за себя и 2 за конкурентов",
                icon: "Vote"
              },
              { 
                step: "3", 
                title: "Отбор финалистов", 
                desc: "50 участников с максимальным количеством голосов проходят в финал",
                icon: "Trophy"
              },
              { 
                step: "4", 
                title: "Финальный концерт", 
                desc: "5 главных ролей, 20 эпизодических, 100 на массовку",
                icon: "Star"
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover-scale border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </div>
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-lg text-muted-foreground">Выбери подходящий вариант участия</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: "Два конкурса", 
                price: "6 000", 
                period: "8 месяцев", 
                features: ["Участие в 2 конкурсах", "Полная программа обучения", "Доступ к мессенджеру", "Профиль участника"],
                popular: false
              },
              { 
                name: "Один конкурс", 
                price: "8 000", 
                period: "4 месяца", 
                features: ["Участие в 1 конкурсе", "Полная программа обучения", "Доступ к мессенджеру", "Профиль участника"],
                popular: false
              },
              { 
                name: "Полный доступ", 
                price: "10 000", 
                period: "12 месяцев", 
                features: ["Неограниченные конкурсы", "Полная программа обучения", "Приоритетная поддержка", "Расширенный профиль", "Доступ к архивам"],
                popular: true
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative hover-scale ${plan.popular ? 'border-primary bg-gradient-to-b from-primary/10 to-transparent' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-secondary text-secondary-foreground px-6 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-xl text-muted-foreground"> ₽</span>
                  </div>
                  <CardDescription>{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-4" />
                  <p className="text-xs text-muted-foreground mb-4">+ 2 000 ₽ доступ к сайту на год</p>
                  <Button className={`w-full ${plan.popular ? 'bg-secondary hover:bg-secondary/90' : ''}`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="agencies" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Для кастинг-агентств</h2>
            <p className="text-lg text-muted-foreground">Зарабатывайте с партнёрской программой</p>
          </div>
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardHeader className="text-center">
              <div className="p-4 bg-accent/20 rounded-lg w-fit mx-auto mb-4">
                <Icon name="Handshake" size={48} className="text-accent" />
              </div>
              <CardTitle className="text-3xl mb-4">20% комиссия с каждого участника</CardTitle>
              <CardDescription className="text-base max-w-2xl">
                Рекламируйте нашу платформу и получайте 20% от стоимости подписки за каждого приведённого участника. 
                При повторной регистрации участника вы также получаете 20%.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-background/50 rounded-lg border border-accent/20">
                  <Icon name="UserPlus" size={32} className="text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">За привлечение</h3>
                  <p className="text-sm text-muted-foreground">20% от первого платежа нового участника</p>
                </div>
                <div className="p-6 bg-background/50 rounded-lg border border-accent/20">
                  <Icon name="RefreshCw" size={32} className="text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">За повторную регистрацию</h3>
                  <p className="text-sm text-muted-foreground">20% от каждого продления подписки</p>
                </div>
              </div>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Стать партнёром
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Icon name="MessageCircle" size={64} className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Встроенный мессенджер</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Общайтесь с другими участниками, делитесь опытом и получайте поддержку от сообщества. 
            Функционал как в WhatsApp и Telegram — всё прямо на платформе.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Icon name="Send" size={16} className="mr-2" />
              Мгновенные сообщения
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Icon name="Users" size={16} className="mr-2" />
              Групповые чаты
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Icon name="Paperclip" size={16} className="mr-2" />
              Обмен файлами
            </Badge>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Film" className="text-primary" size={28} />
              <span className="text-xl font-bold text-gradient">Кастинг №1</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Кастинг №1. Международное актёрское сообщество.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
