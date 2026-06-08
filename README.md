# 12093

這是一個簡單的個人自我介紹網站範例。

快速預覽方法：打開瀏覽器並開啟 `index.html`。

建議 workflow：

- 本地直接開啟：在檔案總管雙擊 `index.html` 或在終端使用 `xdg-open index.html`。
- 使用簡易靜態伺服器：

	```bash
	# 在專案根目錄啟動 (需要安裝 python)
	python3 -m http.server 8000
	# 然後在瀏覽器打開 http://localhost:8000
	```

檔案：

- `index.html`：主頁（含網站事項、時間軸、作品、聯絡）
- `resume.html`：可列印/下載的履歷頁面
- `styles.css`：樣式
- `script.js`：簡單互動（導覽切換、表單送出）
- `images/profile.svg`：範例頭像

客製化與自動郵件接收：

- 若要在聯絡表單啟用電子郵件通知（不需自己架 server），可使用第三方服務，例如 Formspree：

	1. 到 https://formspree.io 註冊並建立表單（取得 form endpoint，例如 `https://formspree.io/f/XXXXXX`）。
	2. 將 `script.js` 的表單處理改為提交到該 endpoint，或直接將表單 `action` 指向該 URL 並設 `method="POST"`。

GitHub Pages 部署（自動化）：

- 我已加入 GitHub Actions workflow：`.github/workflows/deploy.yml`。當你把變更推到 `main` 分支，工作流程會自動將網站內容部署到 GitHub Pages（使用 repository 的預設 Pages 設定）。

其他說明：

- `resume.html` 可直接列印為 PDF（按下列印 / 下載按鈕）。
- 若要替換頭像，將自己的圖片放到 `images/` 並在 `index.html` 調整 `src`。

如果你要我把內容換成你的真實姓名、照片與聯絡資料，或幫你設定 Formspree 與 GitHub Pages，我可以幫你完成後續步驟。
