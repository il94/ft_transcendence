import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { ChatsModule } from './channels/channels.module';
import { FriendsModule } from './friends/friends.module';
import { BlockedsModule } from './blockeds/blockeds.module';
import { PongModule } from './pong/pong.module';

@Module({
  imports: [
    AuthModule, 
    PrismaModule, 
    ConfigModule.forRoot({ isGlobal: true}),
    PassportModule.register({ session: true }),
    ChatsModule,
    FriendsModule,
    BlockedsModule,
	PongModule,
  ],
})
export class AppModule {}
