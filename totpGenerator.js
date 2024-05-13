// 使用totp-generator库生成TOTP代码
function generateTotp(secret) {
    return totp.generate(secret);
}
        function displayTotp() {
            const secret = document.getElementById('secretKey').value;
            const totpCode = generateTotp(secret); // 使用从外部文件导入的函数
            document.getElementById('totpCode').innerText = totpCode;
}        
// 导出函数以便在其他脚本中使用（如果需要在多个地方使用此功能）
