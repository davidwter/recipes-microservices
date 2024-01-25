import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // database type
      host: 'localhost', // database host
      port: 5432, // database port
      username: 'postgres', // database username
      password: 'postgres', // database password
      database: 'recipes', // database name
      entities: [
        /* your entities here */
      ],
      synchronize: true, // if true, automatically creates database tables (use with caution in production)
    }),
    // ... other modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
