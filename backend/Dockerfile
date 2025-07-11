# Python 3.11の軽量版 slim を使ってみる。
FROM python:3.11-slim

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係をインストール　
COPY requirements.txt ./

# --no-cache-dirでキャッシュを残さずイメージサイズを小さくできるらしい。
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのコードをコピー
COPY ./app ./app

# UvicornでFastAPIを起動（ホットリロードなし）
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

# 補足：ホットリロードとは、ファイルの変更を自動で検知してサーバーが自動で再起動して最新の状態で動くようになる。
# 通常は、FAST APIで開発中にコードを少し書き換えた時、サーバーを一旦停止してからまた起動し直す必要があるらしい。
# ホットリロードあり　
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

