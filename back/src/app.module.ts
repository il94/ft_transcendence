import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { GamesModule } from './games/games.module';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [
    AuthModule, 
    PrismaModule, 
    ConfigModule.forRoot({ isGlobal: true}),
    PassportModule.register({ session: true }),
    GamesModule,
    FriendsModule,
  ],
})
export class AppModule {}
