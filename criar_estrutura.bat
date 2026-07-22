@echo off
title Criando estrutura do projeto RioCorretor

echo.
echo ==========================================
echo   Criando estrutura de componentes...
echo ==========================================
echo.

REM Cria a pasta components
mkdir src\components

REM Cria os componentes
type nul > src\components\Navbar.jsx
type nul > src\components\Hero.jsx
type nul > src\components\Portfolio.jsx
type nul > src\components\Servicos.jsx
type nul > src\components\Contato.jsx
type nul > src\components\Footer.jsx

REM Cria o App.jsx caso não exista
if not exist src\App.jsx (
    type nul > src\App.jsx
)

echo.
echo ==========================================
echo Estrutura criada com sucesso!
echo ==========================================
echo.

tree src /F

echo.
pause