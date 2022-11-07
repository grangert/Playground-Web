import { Module } from '@nestjs/common';
import { HelloController } from './hello/helloController';
import { HelloService } from './hello/hello.service';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
})
export class AppModule {}
