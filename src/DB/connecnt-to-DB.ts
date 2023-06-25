import { Injectable, Module } from '@nestjs/common';
import { Client } from 'pg';

const client = new Client({
    // Конфигурация подключения к базе данных
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'mydb',
});
client.connect(); // Подключение к базе данных
module.exports = {client}
export{client}
