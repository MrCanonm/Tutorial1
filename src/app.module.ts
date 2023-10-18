import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorialModule } from './tutorial/tutorial.module';

@Module({
  imports: [TutorialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
