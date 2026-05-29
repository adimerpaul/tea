<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Antecedentes — {{ $student->name }}</title>
    <style>
        * { font-family: Arial, sans-serif; margin: 0; padding: 0; box-sizing: border-box; }
        body { font-size: 11px; color: #1a1a2e; background: #fff; padding: 28px 32px; }

        /* ── Header ──────────────────────────────── */
        .header {
            display: table;
            width: 100%;
            border-bottom: 3px solid #0b1a38;
            padding-bottom: 10px;
            margin-bottom: 16px;
        }
        .header-left  { display: table-cell; vertical-align: middle; width: 70%; }
        .header-right { display: table-cell; vertical-align: middle; text-align: right; width: 30%; }

        .doc-title {
            font-size: 17px;
            font-weight: 800;
            color: #0b1a38;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }
        .doc-subtitle {
            font-size: 11px;
            color: #4a5568;
            margin-top: 2px;
        }
        .colegio-name {
            font-size: 12px;
            font-weight: 700;
            color: #0b1a38;
        }
        .colegio-meta {
            font-size: 9px;
            color: #718096;
            margin-top: 2px;
        }

        /* ── Ficha estudiante ─────────────────────── */
        .student-card {
            background: #f0f4ff;
            border: 1px solid #c3d1f5;
            border-left: 4px solid #0b5ea8;
            border-radius: 4px;
            padding: 12px 14px;
            margin-bottom: 16px;
        }
        .student-card-title {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #0b5ea8;
            margin-bottom: 8px;
        }
        .fields-grid { display: table; width: 100%; border-collapse: collapse; }
        .field-row   { display: table-row; }
        .field-cell  { display: table-cell; padding: 2px 8px 2px 0; width: 25%; vertical-align: top; }
        .field-label { font-size: 8.5px; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .field-value { font-size: 11px; color: #1a202c; margin-top: 1px; }

        /* ── Sección título ───────────────────────── */
        .section-header {
            background: #0b1a38;
            color: #fff;
            padding: 6px 12px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            border-radius: 3px 3px 0 0;
            margin-bottom: 0;
        }

        /* ── Tabla antecedentes ───────────────────── */
        table.hist {
            width: 100%;
            border-collapse: collapse;
            font-size: 10px;
        }
        table.hist thead tr {
            background: #1e3a5f;
            color: #fff;
        }
        table.hist thead th {
            padding: 7px 10px;
            text-align: left;
            font-size: 9.5px;
            font-weight: 700;
            letter-spacing: 0.04em;
            text-transform: uppercase;
        }
        table.hist tbody tr:nth-child(even)  { background: #f7f9ff; }
        table.hist tbody tr:nth-child(odd)   { background: #ffffff; }
        table.hist tbody tr { border-bottom: 1px solid #e2e8f0; }
        table.hist tbody td {
            padding: 7px 10px;
            vertical-align: top;
            line-height: 1.45;
            color: #2d3748;
        }
        table.hist td.col-date { width: 14%; white-space: nowrap; color: #4a5568; font-size: 9.5px; }
        table.hist td.col-desc { width: 68%; }
        table.hist td.col-user { width: 18%; color: #4a5568; font-size: 9.5px; }

        .no-records {
            text-align: center;
            padding: 24px;
            color: #a0aec0;
            font-style: italic;
            background: #fafafa;
            border: 1px solid #e2e8f0;
        }

        /* ── Footer ──────────────────────────────── */
        .footer {
            margin-top: 28px;
            padding-top: 10px;
            border-top: 1px solid #cbd5e0;
            display: table;
            width: 100%;
        }
        .footer-left  { display: table-cell; font-size: 8.5px; color: #a0aec0; vertical-align: bottom; }
        .footer-right { display: table-cell; text-align: right; font-size: 8.5px; color: #a0aec0; vertical-align: bottom; }

        .badge {
            display: inline-block;
            padding: 1px 7px;
            border-radius: 20px;
            font-size: 8.5px;
            font-weight: 700;
        }
        .badge-m { background: #dbeafe; color: #1e40af; }
        .badge-f { background: #fce7f3; color: #9d174d; }
    </style>
</head>
<body>

    {{-- ── Header ─────────────────────────────────── --}}
    <div class="header">
        <div class="header-left">
            <div class="doc-title">Registro de Antecedentes</div>
            <div class="doc-subtitle">Historial del o la estudiante — Sistema TEA</div>
        </div>
        <div class="header-right">
            @if($student->colegio)
                <div class="colegio-name">{{ $student->colegio->nombre }}</div>
                <div class="colegio-meta">{{ $student->colegio->direccion }}</div>
                <div class="colegio-meta">{{ $student->colegio->email }}</div>
            @endif
        </div>
    </div>

    {{-- ── Ficha del estudiante ─────────────────────── --}}
    <div class="student-card">
        <div class="student-card-title">Datos del o la estudiante</div>
        <div class="fields-grid">
            <div class="field-row">
                <div class="field-cell">
                    <div class="field-label">RUT</div>
                    <div class="field-value">{{ $student->rut }}</div>
                </div>
                <div class="field-cell" style="width:40%">
                    <div class="field-label">Nombre Completo</div>
                    <div class="field-value" style="font-weight:700">{{ $student->name }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Sexo</div>
                    <div class="field-value">
                        @if($student->sex === 'M')
                            <span class="badge badge-m">Masculino</span>
                        @elseif($student->sex === 'F')
                            <span class="badge badge-f">Femenino</span>
                        @else
                            {{ $student->sex }}
                        @endif
                    </div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Fecha Nacimiento</div>
                    <div class="field-value">{{ \Carbon\Carbon::parse($student->birthdate)->format('d/m/Y') }}</div>
                </div>
            </div>
            <div class="field-row" style="margin-top:6px">
                <div class="field-cell">
                    <div class="field-label">Curso</div>
                    <div class="field-value">{{ $student->course }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Año</div>
                    <div class="field-value">{{ $student->year }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Año Ingreso PIE</div>
                    <div class="field-value">{{ $student->year_PIE }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">Teléfono</div>
                    <div class="field-value">{{ $student->phone }}</div>
                </div>
            </div>
            <div class="field-row" style="margin-top:6px">
                <div class="field-cell" style="width:40%">
                    <div class="field-label">Dirección</div>
                    <div class="field-value">{{ $student->address }}</div>
                </div>
                <div class="field-cell">
                    <div class="field-label">RUT Tutor/a</div>
                    <div class="field-value">{{ $student->tutorRut }}</div>
                </div>
                <div class="field-cell" style="width:35%">
                    <div class="field-label">Nombre Tutor/a</div>
                    <div class="field-value">{{ $student->tutorName }}</div>
                </div>
            </div>
        </div>
    </div>

    {{-- ── Tabla antecedentes ───────────────────────── --}}
    <div class="section-header">
        Antecedentes &nbsp;·&nbsp; {{ count($student->histories) }} registro(s)
    </div>

    @if(count($student->histories) > 0)
        <table class="hist">
            <thead>
                <tr>
                    <th class="col-date">Fecha</th>
                    <th class="col-desc">Descripción</th>
                    <th class="col-user">Registrado por</th>
                </tr>
            </thead>
            <tbody>
                @foreach($student->histories as $history)
                    <tr>
                        <td class="col-date">
                            {{ \Carbon\Carbon::parse($history->created_at)->format('d/m/Y') }}<br>
                            <span style="color:#a0aec0">{{ \Carbon\Carbon::parse($history->created_at)->format('H:i') }}</span>
                        </td>
                        <td class="col-desc">{{ $history->description }}</td>
                        <td class="col-user">{{ $history->user?->name ?? '—' }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        <div class="no-records">Sin registros de antecedentes.</div>
    @endif

    {{-- ── Footer ──────────────────────────────────── --}}
    <div class="footer">
        <div class="footer-left">
            Sistema TEA &nbsp;·&nbsp; Generado el {{ \Carbon\Carbon::now()->format('d/m/Y H:i') }}
        </div>
        <div class="footer-right">
            Documento de uso interno — Confidencial
        </div>
    </div>

</body>
</html>
