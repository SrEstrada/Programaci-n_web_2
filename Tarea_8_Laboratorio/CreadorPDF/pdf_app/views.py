from django.shortcuts import render
from django.http import HttpResponse
from pdf_project.renderers import render_to_pdf
import datetime

def generar_pdf(request):
    data = {
        'today': datetime.date.today(),
        'amount': 99.99,
        'customer_name': 'Juan Pérez',
        'invoice_number': 123456,
        'pdf_title': 'Factura de Venta'
    }
    return render_to_pdf('pdfs/invoice.html', data)