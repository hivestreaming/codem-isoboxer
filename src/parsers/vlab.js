// ISO/IEC 14496-30:2014 - WebVTT Source Label Box
ISOBox.prototype._boxParsers['vlab'] = function() {
  this.source_label_raw = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
  this.source_label = ISOBoxer.Utils.dataViewToString(this.source_label_raw, 'utf-8');
}
