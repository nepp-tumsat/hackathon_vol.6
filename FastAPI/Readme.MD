


#dockerが立ち上がっている状態で以下のコードを実行する(-Dは、開発者モードの時のみ実行されるデプロイ時には関係しない)
docker-compose exec demo-app poetry add -D pytest-asyncio aiosqlite httpx