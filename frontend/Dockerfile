# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係を先にコピーしてインストール（キャッシュ活用）
COPY package.json package-lock.json* ./
RUN npm install

# ソースコードをコピー
COPY . .

# Next.js をビルド（本番環境用）
RUN npm run build

# ポート番号設定
EXPOSE 3000

# Next.js サーバー起動
CMD ["npm", "start"]