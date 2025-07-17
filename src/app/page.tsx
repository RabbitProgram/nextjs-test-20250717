"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Stack,
  Chip,
  Paper,
} from "@mui/material";
import {
  Psychology,
  Translate,
  Speed,
  Share,
  Android,
  Star,
  TrendingUp,
  Security,
} from "@mui/icons-material";

export default function Home() {
  return (
    <Box>
      {/* ヘッダー */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "primary.main", fontWeight: "bold" }}
          >
            Manslater
          </Typography>
          <Button
            variant="contained"
            startIcon={<Android />}
            href="https://play.google.com/store/apps/details?id=com.rabbitprogram.manslater&hl=ja"
            target="_blank"
            sx={{ borderRadius: 3 }}
          >
            ダウンロード
          </Button>
        </Toolbar>
      </AppBar>

      {/* ヒーローセクション */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          pt: 8,
          pb: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Stack spacing={3}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img
                    src="/app-icon.webp"
                    alt="Manslater アプリアイコン"
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 16,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                    }}
                  />
                  <Box>
                    <Chip
                      label="最新AI搭載"
                      color="secondary"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    />
                    <Typography
                      variant="h2"
                      component="h1"
                      fontWeight="bold"
                      sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                    >
                      Manslater
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ opacity: 0.9, fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  本音翻訳
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
                  日常のコミュニケーションをよりスムーズに。
                  <br />
                  最新AIが言葉の裏に隠された本音を暴き、候補を提示する翻訳アプリ。
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Android />}
                    href="https://play.google.com/store/apps/details?id=com.rabbitprogram.manslater&hl=ja"
                    target="_blank"
                    sx={{
                      backgroundColor: "white",
                      color: "primary.main",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Google Playで入手
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "white",
                      color: "white",
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    デモを見る
                  </Button>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 400,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    transform: "perspective(1000px) rotateY(-10deg)",
                    "& img": {
                      width: 200,
                      height: 350,
                      borderRadius: 8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                      transition: "transform 0.3s ease",
                      objectFit: "cover",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  <img
                    src="/screenshot-1.webp"
                    alt="Manslater メイン画面"
                    style={{ zIndex: 3 }}
                  />
                  <img
                    src="/screenshot-2.webp"
                    alt="Manslater シェア機能"
                    style={{ zIndex: 2, transform: "translateX(-30px)" }}
                  />
                  <img
                    src="/screenshot-3.webp"
                    alt="Manslater 翻訳結果"
                    style={{ zIndex: 1, transform: "translateX(-60px)" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 機能セクション */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          主な機能
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Manslaterがコミュニケーションを変える
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Card elevation={3} sx={{ flex: 1, borderRadius: 3 }}>
            <CardContent sx={{ textAlign: "center", p: 4 }}>
              <Psychology sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                gutterBottom
              >
                本音を読み取り
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                最新のAI技術により、言葉の裏に隠された真意や感情を分析し、より深いコミュニケーションを可能にします。
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={3} sx={{ flex: 1, borderRadius: 3 }}>
            <CardContent sx={{ textAlign: "center", p: 4 }}>
              <Translate sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                gutterBottom
              >
                リアルタイム翻訳
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                高精度の翻訳エンジンにより、瞬時に相手の言葉を理解し、適切な返答候補を提示します。
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={3} sx={{ flex: 1, borderRadius: 3 }}>
            <CardContent sx={{ textAlign: "center", p: 4 }}>
              <Share sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                gutterBottom
              >
                簡単シェア
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                翻訳結果を簡単にシェアできるため、チームや友人とのコミュニケーションがより円滑になります。
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* アプリスクリーンショットセクション */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          アプリスクリーンショット
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          直感的で使いやすいインターフェース
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <img
              src="/screenshot-1.webp"
              alt="メイン翻訳画面"
              style={{
                width: "100%",
                maxWidth: 280,
                height: "auto",
                borderRadius: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
              メイン翻訳画面
            </Typography>
            <Typography variant="body2" color="text.secondary">
              テキストを入力するだけで瞬時に本音翻訳
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <img
              src="/screenshot-2.webp"
              alt="シェア機能"
              style={{
                width: "100%",
                maxWidth: 280,
                height: "auto",
                borderRadius: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
              シェア機能
            </Typography>
            <Typography variant="body2" color="text.secondary">
              翻訳結果を簡単にSNSでシェア
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <img
              src="/screenshot-3.webp"
              alt="翻訳結果表示"
              style={{
                width: "100%",
                maxWidth: 280,
                height: "auto",
                borderRadius: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
              翻訳結果表示
            </Typography>
            <Typography variant="body2" color="text.secondary">
              複数の翻訳パターンから選択可能
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <img
              src="/screenshot-4.webp"
              alt="翻訳タイプ選択"
              style={{
                width: "100%",
                maxWidth: 280,
                height: "auto",
                borderRadius: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
              翻訳タイプ選択
            </Typography>
            <Typography variant="body2" color="text.secondary">
              シチュエーションに応じた翻訳スタイル
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <img
              src="/screenshot-5.webp"
              alt="コミュニティ機能"
              style={{
                width: "100%",
                maxWidth: 280,
                height: "auto",
                borderRadius: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
              みんなの本音
            </Typography>
            <Typography variant="body2" color="text.secondary">
              コミュニティで翻訳結果をシェア
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <img
              src="/screenshot-6.webp"
              alt="設定画面"
              style={{
                width: "100%",
                maxWidth: 280,
                height: "auto",
                borderRadius: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
              設定画面
            </Typography>
            <Typography variant="body2" color="text.secondary">
              お好みに合わせたカスタマイズ
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* 特徴セクション */}
      <Box sx={{ backgroundColor: "grey.50", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            なぜManslaterなのか
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            選ばれる理由
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              <Paper elevation={2} sx={{ flex: 1, p: 4, borderRadius: 3 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Speed sx={{ color: "primary.main", fontSize: 32 }} />
                  <Typography variant="h5" fontWeight="bold">
                    高速処理
                  </Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  最適化されたAIエンジンにより、瞬時に翻訳と本音分析を実行。待ち時間なしでスムーズなコミュニケーションを実現します。
                </Typography>
              </Paper>

              <Paper elevation={2} sx={{ flex: 1, p: 4, borderRadius: 3 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Security sx={{ color: "primary.main", fontSize: 32 }} />
                  <Typography variant="h5" fontWeight="bold">
                    プライバシー保護
                  </Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  すべての翻訳処理はローカルで実行され、個人情報は外部に送信されません。安心してご利用いただけます。
                </Typography>
              </Paper>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              <Paper elevation={2} sx={{ flex: 1, p: 4, borderRadius: 3 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <TrendingUp sx={{ color: "primary.main", fontSize: 32 }} />
                  <Typography variant="h5" fontWeight="bold">
                    学習機能
                  </Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  使用するほどにユーザーの好みや傾向を学習し、より精度の高い翻訳と本音分析を提供します。
                </Typography>
              </Paper>

              <Paper elevation={2} sx={{ flex: 1, p: 4, borderRadius: 3 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Star sx={{ color: "primary.main", fontSize: 32 }} />
                  <Typography variant="h5" fontWeight="bold">
                    高評価
                  </Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  多くのユーザーから高い評価をいただいており、コミュニケーション改善の実績があります。
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ユーザーレビューセクション */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          ユーザーの声
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          実際にManslaterを使っているユーザーからの評価
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Card elevation={3} sx={{ flex: 1, p: 3 }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} sx={{ color: "#ffc107", fontSize: 20 }} />
              ))}
            </Stack>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
              &ldquo;日常会話の微妙なニュアンスまで翻訳してくれるので、本当に助かっています。特に本音翻訳機能は面白くて、使っていて楽しいです。&rdquo;
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ユーザー A
            </Typography>
          </Card>

          <Card elevation={3} sx={{ flex: 1, p: 3 }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} sx={{ color: "#ffc107", fontSize: 20 }} />
              ))}
            </Stack>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
              &ldquo;シェア機能が便利で、友達と翻訳結果について話すのが楽しくなりました。AIの精度も高くて驚きました。&rdquo;
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ユーザー B
            </Typography>
          </Card>

          <Card elevation={3} sx={{ flex: 1, p: 3 }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} sx={{ color: "#ffc107", fontSize: 20 }} />
              ))}
              <Star sx={{ color: "#e0e0e0", fontSize: 20 }} />
            </Stack>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
              &ldquo;インターフェースが分かりやすくて、初心者でも簡単に使えます。翻訳の種類も豊富で重宝しています。&rdquo;
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ユーザー C
            </Typography>
          </Card>
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Google Playでも高評価
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} sx={{ color: "#ffc107", fontSize: 32 }} />
            ))}
            <Star sx={{ color: "#e0e0e0", fontSize: 32 }} />
          </Stack>
          <Typography variant="body1" color="text.secondary">
            10+ ダウンロード | 13歳以上対象
          </Typography>
        </Box>
      </Container>

      {/* CTAセクション */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} textAlign="center">
            <Typography variant="h3" component="h2" fontWeight="bold">
              今すぐManslaterを始めよう
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              コミュニケーションをより深く、より豊かに。
              <br />
              Manslaterで新しい翻訳体験を。
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Android />}
              href="https://play.google.com/store/apps/details?id=com.rabbitprogram.manslater&hl=ja"
              target="_blank"
              sx={{
                backgroundColor: "white",
                color: "primary.main",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
                borderRadius: 3,
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                alignSelf: "center",
              }}
            >
              無料でダウンロード
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* フッター */}
      <Box sx={{ backgroundColor: "grey.900", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Manslater
              </Typography>
              <Typography variant="body2" color="grey.400">
                開発者: ラビットプログラム
                <br />© 2024 Rabbit Program. All rights reserved.
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
              >
                <Button
                  color="inherit"
                  href="https://play.google.com/store/apps/details?id=com.rabbitprogram.manslater&hl=ja"
                  target="_blank"
                >
                  Google Play
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
