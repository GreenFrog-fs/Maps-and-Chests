import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);
  console.log('сервер работает на порту 4000');
}
bootstrap();

import { Bot, InlineKeyboard } from 'grammy';
const url = 'https://domennameabcdef.ru/index.html';
const bot = new Bot('7530315714:AAHXK60ZgFsMOw01X2jQJ0IfOk7SwIIQcNM');

console.log('бот запускается');
bot.command('start', (ctx) => {
  ctx.reply('Добро пожаловать в Maps&Chests', {
    reply_markup: new InlineKeyboard().webApp('открыть карту', url),
  });
});
bot.start();
console.log('бот запущен');
