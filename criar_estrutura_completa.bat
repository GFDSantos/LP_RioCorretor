@echo off
title Criando estrutura completa do projeto RioCorretor

echo.
echo ==============================================
echo     CRIANDO ESTRUTURA DO PROJETO
echo ==============================================
echo.

REM ==========================================
REM Pastas
REM ==========================================

mkdir src\components
mkdir src\assets
mkdir src\assets\images
mkdir src\assets\icons
mkdir src\styles
mkdir src\data

REM ==========================================
REM Arquivos JSX
REM ==========================================

type nul > src\components\Navbar.jsx
type nul > src\components\Hero.jsx
type nul > src\components\Portfolio.jsx
type nul > src\components\Servicos.jsx
type nul > src\components\Contato.jsx
type nul > src\components\Footer.jsx
type nul > src\components\BotaoWhatsApp.jsx

REM ==========================================
REM Arquivos CSS
REM ==========================================

type nul > src\styles\global.css

REM ==========================================
REM Arquivos JS
REM ==========================================

type nul > src\data\projetos.js

REM ==========================================
REM App.jsx
REM ==========================================

if not exist src\App.jsx (
    type nul > src\App.jsx
)

echo.
echo ==============================================
echo        Estrutura criada com sucesso!
echo ==============================================
echo.

tree src /F

echo.
pause